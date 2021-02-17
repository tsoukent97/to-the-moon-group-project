const { getBalances, getAssetInfo } = require('../kraken')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const balances = await getBalances()
    const assetInfo = await getAssetInfo(balances)
    return res.json(assetInfo)
  } catch (err) {
    throw err
  }
})

module.exports = router
