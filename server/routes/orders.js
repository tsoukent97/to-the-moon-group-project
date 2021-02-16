const express = require('express')
// const request = require('superagent')
const { openOrders } = require('../ordersAPI')

const router = express.Router()

router.get('/open', (req, res) => {
  openOrders()
    // TODO put in (res), then res.results when getting rid of hard coded response
    .then(() => {
      res.json(
        [
          {
            id: 'OTGZ4R-5DLAK-2LOQCQ',
            opentm: 1613470428.006,
            vol: '0.00020000',
            price: '52000.0',
            pair: 'XBTUSD',
            type: 'sell'
          },
          {
            id: 'O7ZXP3-MXHKG-4NWUHE',
            opentm: 1613470176.8885,
            vol: '0.00020000',
            price: '65000.0',
            pair: 'XBTUSD',
            type: 'sell'
          },
          {
            id: 'OZVQHL-OE55C-S3DYN2',
            opentm: 1613470166.8788,
            vol: '0.00020000',
            price: '60000.0',
            pair: 'XBTUSD',
            type: 'sell'
          }
        ])
      return null
    })
    .catch(err => console.log(err))
})

module.exports = router
