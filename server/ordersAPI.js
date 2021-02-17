require('dotenv').config()
const KrakenClient = require('kraken-api')

const key = process.env.KRAKEN_API_KEY
const secret = process.env.KRAKEN_API_SECRET

function openOrders () {
  const kraken = new KrakenClient(key, secret)
  console.log(kraken.api)
  // console.log(kraken())
  return kraken.api('OpenOrders')
    .then(res => {
      console.log(res.result)
      return null
    })
    .catch(e => {
      console.log(e)
    })
}

module.exports = { openOrders }
