const { openOrders } = require('../server/kraken/ordersAPI')

openOrders()
  .then(res => {
    console.log(res)
    return null
  })
  .catch(e => {
    console.log(e)
  })
