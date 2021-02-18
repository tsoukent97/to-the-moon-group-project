const express = require('express')
const { openOrders } = require('../kraken/ordersAPI')

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

module.exports = router
