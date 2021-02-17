const { getBalances, getTicker } = require('../kraken')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  console.log('getroute')
  const balances = await getBalances()
  const ticker = await getTicker(balances)
  res.json(ticker)
})

module.exports = router
