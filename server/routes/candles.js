const { getPrevCandles } = require('../api/candlesApi')

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  getPrevCandles()
    .then((candles) => {
      console.log(candles)
      res.json(candles)
      return null
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

module.exports = router
