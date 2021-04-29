const { callKraken } = require('./kraken')

function getTradesHistory () {
  return callKraken('TradesHistory')
    .then(res => {
      return tradeTransform(res.result.trades)
    })
    .catch(e => {
      console.log(e)
    })
}

function tradeTransform (obj) {
  const returnArr = Object.keys(obj).map((id) => {
    return {
      id,
      pair: obj[id].pair,
      time: obj[id].time,
      type: obj[id].type,
      ordertype: obj[id].ordertype,
      price: obj[id].price,
      fee: obj[id].fee,
      vol: obj[id].vol
    }
  })
  return returnArr
}

module.exports = {
  getTradesHistory
}
