require('dotenv').config()
const KrakenClient = require('kraken-api')

const key = process.env.KRAKEN_API_KEY
const secret = process.env.KRAKEN_API_SECRET
const kraken = new KrakenClient(key, secret)

function getBalances() {
  return kraken
    .api('Balance')
    .then(balance => balance)
    .catch(err => console.error(err))
}

function getAssetInfo(balance) {
  const tokens = Object.keys(balance.result).slice(1)
  const pairs = tokens.map(token => token + 'ZUSD').join(', ')
  return kraken
    .api('Ticker', { pair: pairs })
    .then(assetInfo =>
      tokens.map(token => mapAssetInfo(token, assetInfo, balance))
    )
    .catch(err => console.error(err))
}

function mapAssetInfo(token, assetInfo, balance) {
  const amount = balance.result[token]
  const priceUsd = assetInfo.result[token + 'ZUSD'].c[0]
  return {
    token,
    amount,
    priceUsd,
    amountUsd: amount * priceUsd,
  }
}

module.exports = { getBalances, getAssetInfo }
