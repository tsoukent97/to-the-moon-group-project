require('dotenv').config()
const KrakenClient = require('kraken-api')

const key = process.env.KRAKEN_API_KEY
const secret = process.env.KRAKEN_API_SECRET
const kraken = new KrakenClient(key, secret)

function getBalances() {
  return kraken.api('Balance')
    .then(balance => {
      const tokens = Object.keys(balance.result).slice(1)
      const pairs = tokens.map(token => token + 'ZUSD').join(', ')
      return {pairs, tokens, balance}
    })
    .catch(err => console.log(err))
}

function getAssetInfo({pairs, tokens, balance}) {
  return kraken.api('Ticker', { pair: pairs }).then(response => {
    return tokens.map((asset) => {
      return {
          token: asset,
          amount: balance.result[asset],
          priceUsd: response.result[asset + 'ZUSD'].c[0],
          amountUsd: balance.result[asset] * response.result[asset + 'ZUSD'].c[0]
        }
    })
  })
}

module.exports = { getBalances, getAssetInfo }
