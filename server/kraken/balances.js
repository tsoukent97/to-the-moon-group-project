const { callKraken } = require('./kraken')

function getBalances () {
  return callKraken('Balance')
}

function getAssetInfo (balance) {
  const tokens = Object.keys(balance.result).slice(1)
  const pairs = tokens.map(token => token + 'ZUSD').join(', ')
  return callKraken('Ticker', { pair: pairs })
    .then(assetInfo =>
      tokens.map(token => mapAssetInfo(token, assetInfo, balance))
    )
    .catch(err => console.error(err))
}

function mapAssetInfo (token, assetInfo, balance) {
  const amount = balance.result[token]
  const priceUsd = assetInfo.result[token + 'ZUSD'].c[0]
  return {
    token,
    amount,
    priceUsd,
    amountUsd: amount * priceUsd
  }
}

module.exports = { getBalances, getAssetInfo }
