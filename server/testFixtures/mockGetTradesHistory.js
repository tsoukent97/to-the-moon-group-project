const mockGetTradesHistory = {
  result: {
    trades:
            {
              'TAJZ7Y-TDY4I-AAM2CR': {
                ordertxid: 'OSSSDI-WX57D-OQIIZH',
                postxid: 'TKH2SE-M7IF5-CFI7LT',
                pair: 'XXBTZUSD',
                time: 1619652536.7256,
                type: 'sell',
                ordertype: 'limit',
                price: '54726.90000',
                cost: '10.94538',
                fee: '0.02846',
                vol: '0.00020000',
                margin: '0.00000',
                misc: ''
              },
              'THCVN7-LU5SB-FA6TSK': {
                ordertxid: 'ONWNWX-5MKFT-6LH2DS',
                postxid: 'TKH2SE-M7IF5-CFI7LT',
                pair: 'XXBTZUSD',
                time: 1614902988.2193,
                type: 'buy',
                ordertype: 'limit',
                price: '47411.00000',
                cost: '9.48220',
                fee: '0.01517',
                vol: '0.00020000',
                margin: '0.00000',
                misc: ''
              }
            }
  }
}

const mockReturnTradesHistory = [
  {
    'TAJZ7Y-TDY4I-AAM2CR': {
      ordertxid: 'OSSSDI-WX57D-OQIIZH',
      postxid: 'TKH2SE-M7IF5-CFI7LT',
      pair: 'XXBTZUSD',
      time: 1619652536.7256,
      type: 'sell',
      ordertype: 'limit',
      price: '54726.90000',
      cost: '10.94538',
      fee: '0.02846',
      vol: '0.00020000',
      margin: '0.00000',
      misc: ''
    },
    'THCVN7-LU5SB-FA6TSK': {
      ordertxid: 'ONWNWX-5MKFT-6LH2DS',
      postxid: 'TKH2SE-M7IF5-CFI7LT',
      pair: 'XXBTZUSD',
      time: 1614902988.2193,
      type: 'buy',
      ordertype: 'limit',
      price: '47411.00000',
      cost: '9.48220',
      fee: '0.01517',
      vol: '0.00020000',
      margin: '0.00000',
      misc: ''
    }
  }
]

module.exports = {
  mockGetTradesHistory,
  mockReturnTradesHistory
}
