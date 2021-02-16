import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits () {
  return request.get(rootUrl + '/fruits')
    .then(res => {
      return res.body.fruits
    })
}

export function getOrders () {
  const orders = [
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

  // return request.get(rootUrl + '/balances')
  //   .then(res => {
  //     return res.body
  //   })

  return Promise.resolve(orders)
}
