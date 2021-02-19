const { callKraken } = require('./kraken')
const { dataTransform } = require('../utilities/dataTransform')

function openOrders () {
  return callKraken('OpenOrders')
    .then(res => {
      return dataTransform(res.result.open)
    })
    .catch(e => {
      console.log(e)
    })
}

function cancelOrder (txid) {
  if (!txid) {
    const error = new Error('No order id')
    return Promise.reject(error)
  }

  return callKraken('CancelOrder', { txid })
    .then(res => {
      console.log(typeof res.result.count)
      return res
    })
}

module.exports = {
  openOrders,
  cancelOrder
}
