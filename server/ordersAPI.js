require('dotenv').config()
const KrakenClient = require('kraken-api')
const { dataTransform } = require('./utilities/dataTransform')

const key = process.env.KRAKEN_API_KEY
const secret = process.env.KRAKEN_API_SECRET

function openOrders () {
  const kraken = new KrakenClient(key, secret)
  return kraken.api('OpenOrders')
    .then(res => {
      console.log(res)
      return dataTransform(res.result.open)
    })
    .catch(e => {
      console.log(e)
    })
}

module.exports = { openOrders }
