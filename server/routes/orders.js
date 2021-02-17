const express = require('express')
// const request = require('superagent')
const { openOrders } = require('../ordersAPI')

const router = express.Router()

router.get('/open', (req, res) => {
  openOrders()
    .then((result) => {
      console.log(result)
      return res.json(result)
    })
    .catch(err => console.log(err))
})

module.exports = router
