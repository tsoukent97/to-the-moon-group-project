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

module.exports = { openOrders }
