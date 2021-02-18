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

module.exports = router
