require('dotenv').config()
const KrakenClient = require('kraken-api')

const key = process.env.KRAKEN_API_KEY
const secret = process.env.KRAKEN_API_SECRET

module.exports = callKraken

function callKraken (method, params) {
  const kraken = new KrakenClient(key, secret)
  return kraken.api(method, params)
    .then(res => res)
    .catch(e => {
      throw e
    })
}

// https://www.kraken.com/features/api

// Balance
// Assets
// AssetPairs
// Ticker
// OpenOrders
// CancelOrder
// AddOrder
