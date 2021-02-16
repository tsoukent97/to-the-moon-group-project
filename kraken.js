require('dotenv').config()
const KrakenClient = require('kraken-api')

const key = process.env.KRAKEN_API_KEY
const secret = process.env.KRAKEN_API_SECRET
const kraken = new KrakenClient(key, secret)

// https://www.kraken.com/features/api

// Balance
// Assets
// AssetPairs
// Ticker
// OpenOrders
// CancelOrder
// AddOrder

kraken.api('OpenOrders'/* 'Ticker', { pair: 'XXBTZUSD, XLTCZUSD' } */)
  .then(res => {
    console.log(res.result.open['OZVQHL-OE55C-S3DYN2'].descr)
    return null
  })
  .catch(e => {
    console.log(e)
  })
