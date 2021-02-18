const callKraken = require('./kraken')

module.exports = {
  getTicker,
  getBalance
}

function getTicker () {
  return callKraken('Ticker', { pair: 'XXBTZUSD, XLTCZUSD' })
    .then(tickerRes => tickerRes.result)
    .catch(err => {
      console.error(err)
    })
}

function getBalance () {
  return callKraken('Balance')
    .then(balance => balance.result)
    .catch(err => {
      console.error(err)
    })
}
