const express = require('express')
const { openOrders, cancelOrder, addOrder } = require('../kraken/ordersAPI')
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
  let { pair, type, price } = req.body.order
  type = type.toLowerCase()
  if (typeof pair === 'string' && typeof type === 'string' && typeof price === 'string') {
    callKraken('Ticker', { pair: pair }).then((data) => {
      const currentPrice = Number(data.result[pair].c[0])

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
    addOrder(pair, price, type)
      .then((results) => {
        res.send(results)
        return null
      }).catch(e => console.log(e))
  }
})

// this is a mock for testing the addOrder apiClient
router.post('/add', (req, res) => {
  return res.json('Success')
})

router.post('/cancel/:txid', (req, res) => {
  const { txid } = req.params
  cancelOrder(txid)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err.message))
})

module.exports = router
