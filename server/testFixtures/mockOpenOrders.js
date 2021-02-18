const mockOpenOrders = {
  result: {
    open: {
      'OTGZ4R-5DLAK-2LOQCQ': {
        refid: null,
        userref: 0,
        status: 'open',
        opentm: 1613470428.006,
        starttm: 0,
        expiretm: 0,
        descr: {
          pair: 'XBTUSD',
          type: 'sell',
          ordertype: 'limit',
          price: '52000.0',
          price2: '0',
          leverage: 'none',
          order: 'sell 0.00020000 XBTUSD @ limit 52000.0',
          close: ''
        },
        vol: '0.00020000',
        vol_exec: '0.00000000',
        cost: '0.00000',
        fee: '0.00000',
        price: '0.00000',
        stopprice: '0.00000',
        limitprice: '0.00000',
        misc: '',
        oflags: 'fciq'
      },
      'O7ZXP3-MXHKG-4NWUHE': {
        refid: null,
        userref: 0,
        status: 'open',
        opentm: 1613470176.8885,
        starttm: 0,
        expiretm: 0,
        descr: {
          pair: 'XBTUSD',
          type: 'sell',
          ordertype: 'limit',
          price: '65000.0',
          price2: '0',
          leverage: 'none',
          order: 'sell 0.00020000 XBTUSD @ limit 65000.0',
          close: ''
        },
        vol: '0.00020000',
        vol_exec: '0.00000000',
        cost: '0.00000',
        fee: '0.00000',
        price: '0.00000',
        stopprice: '0.00000',
        limitprice: '0.00000',
        misc: '',
        oflags: 'fciq'
      },
      'OZVQHL-OE55C-S3DYN2': {
        refid: null,
        userref: 0,
        status: 'open',
        opentm: 1613470166.8788,
        starttm: 0,
        expiretm: 0,
        descr: {
          pair: 'XBTUSD',
          type: 'sell',
          ordertype: 'limit',
          price: '60000.0',
          price2: '0',
          leverage: 'none',
          order: 'sell 0.00020000 XBTUSD @ limit 60000.0',
          close: ''
        },
        vol: '0.00020000',
        vol_exec: '0.00000000',
        cost: '0.00000',
        fee: '0.00000',
        price: '0.00000',
        stopprice: '0.00000',
        limitprice: '0.00000',
        misc: '',
        oflags: 'fciq'
      }
    }
  }
}

const mockReturnOpenOrders = [
  {
    id: 'OTGZ4R-5DLAK-2LOQCQ',
    opentm: 1613470428.006,
    vol: '0.00020000',
    price: '52000.0',
    pair: 'XBTUSD',
    type: 'sell'
  },
  {
    id: 'O7ZXP3-MXHKG-4NWUHE',
    opentm: 1613470176.8885,
    vol: '0.00020000',
    price: '65000.0',
    pair: 'XBTUSD',
    type: 'sell'
  },
  {
    id: 'OZVQHL-OE55C-S3DYN2',
    opentm: 1613470166.8788,
    vol: '0.00020000',
    price: '60000.0',
    pair: 'XBTUSD',
    type: 'sell'
  }
]

module.exports = { mockOpenOrders, mockReturnOpenOrders }
