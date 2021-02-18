const { callKraken } = require('../server/kraken/kraken')

callKraken('AddOrder', {
  pair: 'XXBTZUSD',
  type: 'buy',
  ordertype: 'limit',
  price: '49000',
  volume: '0.0002'
})
  .then(res => {
    console.log(res)
    return null
  })
  .catch(e => {
    console.log(e)
  })
