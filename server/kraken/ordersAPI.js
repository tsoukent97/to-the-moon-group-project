const { callKraken } = require('./kraken')

function openOrders () {
  return callKraken('OpenOrders')
    .then(res => {
      return dataTransform(res.result.open)
    })
    .catch(e => {
      console.log(e)
    })
}

function dataTransform (obj) {
  const returnArr = Object.keys(obj).map((id) => {
    return {
      id,
      opentm: obj[id].opentm,
      vol: obj[id].vol,
      price: obj[id].descr.price,
      pair: obj[id].descr.pair,
      type: obj[id].descr.type
    }
  })
  return returnArr
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
  }).catch(e => {
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
      return res
    })
}

module.exports = {
  openOrders,
  cancelOrder,
  addOrder
}
