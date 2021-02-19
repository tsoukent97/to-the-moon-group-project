const { callKraken } = require('../server/kraken/kraken')

callKraken('AddOrder', {
  pair: 'XXBTZUSD',
  type: 'sell',
  ordertype: 'limit',
  price: '55000',
  volume: '0.0002'
})
  .then(res => {
    console.log(res)
    return null
  })
  .catch(e => {
    console.log(e)
  })
