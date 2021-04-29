const request = require('superagent')

const krakenUrl = 'https://api.kraken.com/0/public/OHLC'

function getPrevCandles () {
  return request.get(krakenUrl + '?pair=XBTUSD')
    .then(res => {
      return res.body
    })
}

module.exports = {
  getPrevCandles
}
