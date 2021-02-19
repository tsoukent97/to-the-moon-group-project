const express = require('express')
const { openOrders, addOrder } = require('../kraken/ordersAPI')

const req = {
  pair: 'XXBTZUSD',
  price: 60000,
  type: 'buy',
  ordertype: 'limit',
  volume: 0.0002,
}

const router = express.Router()

router.get('/open', (req, res) => {
  openOrders()
    .then((result) => {
      return res.json(result)
    })
    .catch(err => console.log(err))
})

router.post('/add', (req, res) => {
  const {pair, type, price} = req.body.order
  console.log('the pair is: '+pair+' the type of order is: '+type+' price is: '+price)
  addOrder(pair, type, price)
    .then((results) => {
      console.log('Order : '+ JSON.stringify(results))
      return results
    })
})

module.exports = router
