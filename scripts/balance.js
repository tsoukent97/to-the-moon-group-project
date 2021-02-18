const { getBalances, getAssetInfo } = require('../server/kraken/balances')

getBalances()
  .then(balances => {
    return getAssetInfo(balances)
  })
  .then(assetInfo => console.log(assetInfo))
  .catch(e => console.log(e))
