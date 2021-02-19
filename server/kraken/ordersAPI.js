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

function addOrder (pair, price, type) {
  return callKraken('AddOrder', {
    pair: pair,
    type: type,
    ordertype: 'limit',
    price: price,
    volume: '0.0002'
  }).then((result) => {
    return result
  }).catch(e => console.log(e))
}

function cancelOrder (txid) {
  if (!txid) {
    const error = new Error('No order id')
    return Promise.reject(error)
  }

  return callKraken('CancelOrder', { txid })
    .then(res => {
      return res
    })
}

module.exports = {
  openOrders,
  cancelOrder,
  addOrder
}
