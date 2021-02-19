const { callKraken } = require('./kraken')

function getBalances () {
  return callKraken('Balance')
}

function getAssetInfo (balance) {
  const tokens = Object.keys(balance.result)
  const tokensForPairs = tokens.filter(token => token !== 'ZUSD')
  const pairs = tokensForPairs.map(token => token + 'ZUSD').join(', ')
  return callKraken('Ticker', { pair: pairs })
    .then(assetInfo =>
      tokens.map(token => mapAssetInfo(token, assetInfo, balance))
    )
    .catch(err => console.error(err))
}

function mapAssetInfo (token, assetInfo, balance) {
  const amount = balance.result[token]
  const usdPrice = token === 'ZUSD' ? 1 : assetInfo.result[token + 'ZUSD'].c[0]
  return {
    token,
    amount,
    usdPrice,
    usdValue: amount * usdPrice
  }
}

module.exports = { getBalances, getAssetInfo }
