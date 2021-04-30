require('dotenv').config()
const KrakenClient = require('kraken-api')

const key = process.env.KRAKEN_API_KEY
const secret = process.env.KRAKEN_API_SECRET

function callKraken (method, params) {
  const kraken = new KrakenClient(key, secret)
  return kraken
    .api(method, params)
    .then(res => res)
    .catch(e => {
      return e.message
    })
}

module.exports = { callKraken }
