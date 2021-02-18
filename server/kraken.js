const { mapAssetInfo } = require('./lib')
const { callKraken } = require('../demo')

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

module.exports = { getBalances, getAssetInfo }
