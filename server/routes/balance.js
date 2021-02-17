const express = require('express')

const data = [
  { token: 'BTC', amount: '0.001', usdPrice: '49500.00', usdValue: '495.00' },
  { token: 'USD', amount: '10', usdPrice: '1', usdValue: '10' }]

const router = express.Router()

router.get('/', (req, res) => {
  res.send(data)
})

module.exports = router
