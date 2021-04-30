const request = require('superagent')

const krakenUrl = 'https://api.kraken.com/0/public/OHLC'

function getPrevCandles (interval) {
  return request.get(krakenUrl + '?pair=XBTUSD&interval=' + interval)
    .then(res => {
      return res.body
    })
}

module.exports = {
  getPrevCandles
}
