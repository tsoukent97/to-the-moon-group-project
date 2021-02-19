const express = require('express')
const { openOrders, addOrder } = require('../kraken/ordersAPI')
const { callKraken } = require('../kraken/kraken')

const router = express.Router()

router.get('/open', (req, res) => {
  openOrders()
    .then((result) => {
      return res.json(result)
    })
    .catch(err => console.log(err))
})

router.post('/add', (req, res) => {
  const { pair, type, price } = req.body.order
  if (typeof pair === 'string' && typeof type === 'string' && typeof price === 'string') {
    callKraken('Ticker', { pair: pair }).then((data) => {
      const currentPrice = data.result[pair].c[0]

      if (type === 'sell' && (Number(price) > (currentPrice * 1.01))) {
        priceUpdated()
      } else if (type === 'buy' && (Number(price) < (currentPrice * 0.99))) {
        priceUpdated()
      } else {
        res.send('Your order price was too close to last trade price (+/-1%)')
      }
      return null
    }).catch(e => console.log(e))
  } else {
    res.send('Error: Invalid Input Type')
  }

  function priceUpdated () {
    addOrder(pair, type, price)
      .then((results) => {
        console.log('Order : ' + JSON.stringify(results))
        res.send(results)
        return null
      }).catch(e => console.log(e))
  }
})

module.exports = router
