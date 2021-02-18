const { getBalances, getAssetInfo } = require('../kraken/balances')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  const balances = await getBalances()
  const assetInfo = await getAssetInfo(balances)
  return res.json(assetInfo)
})

module.exports = router
