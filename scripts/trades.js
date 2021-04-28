const { callKraken } = require('../server/kraken/kraken')

callKraken('TradesHistory', {})
  .then(res => {
    console.log(res.result.trades)
    return null
  })
  .catch(e => {
    console.log(e)
  })

/*
    const trades = [
      {
        id: 'TXDOOL-3CLKJ-7GSKLC',
        pair: 'XLTCXXBT',
        time: 1519898642.899,
        type: 'sell',
        ordertype: 'limit',
        price: '0.01958100',
        fee: '0.00000509',
        volume: '0.10000000'
      },
      {
        id: 'ORZHUE-SYBVN-Z5KG22'',
        pair: 'XLTCZUSD',
        time: 1524701646.3571,
        type: 'buy',
        ordertype: 'market',
        price: '144.31000',
        fee: '3.75206',
        volume: '10.0000000'
      }
    ]

  */
