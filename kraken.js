require('dotenv').config()
const KrakenClient = require('kraken-api')

const key = process.env.KRAKEN_API_KEY
const secret = process.env.KRAKEN_API_SECRET

// https://www.kraken.com/features/api

// Balance
// Assets
// AssetPairs
// Ticker
// OpenOrders
// CancelOrder
// AddOrder

function callAPI () {
  const kraken = new KrakenClient(key, secret)
  return kraken.api('Ticker', { pair: 'XXBTZUSD, XLTCZUSD' })
    .then(res => {
      return res.result
    })
    .catch(e => {
      console.log(e)
    })
}

// callAPI().then(console.log)

module.exports = { callAPI }
