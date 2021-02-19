const express = require('express')
const { openOrders, cancelOrder } = require('../kraken/ordersAPI')

const router = express.Router()

router.get('/open', (req, res) => {
  openOrders()
    .then((result) => {
      return res.json(result)
    })
    .catch(err => console.log(err))
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
