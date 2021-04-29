import request from 'superagent'

const rootUrl = '/api/v1'

export function getBalance () {
  return request.get(rootUrl + '/balance/')
    .then(res => {
      return res.body
    })
    .catch(e => console.log(e))
}

export function getOrders () {
  return request.get(rootUrl + '/orders/open')
    .then(res => {
      return res.body
    })
    .catch(e => console.log(e))
}

export function cancelOrder (id) {
  return request.post(rootUrl + `/orders/cancel/${id}`)
    .then((res) => {
      if (res.status === 200) {
        return null
      } else {
        throw new Error(res.text)
      }
    })
    .catch(e => { throw new Error(e.response.text) })
}

export function addOrder (order) {
  return request.post(rootUrl + '/orders/add')
    .send({ order })
    .then(res => {
      if (res.status !== 201) throw new Error(res.text)
      return null
    })
}

export function getTrades () {
  // return request.get(rootUrl + '/')
  // .then(() => {
  return Promise.resolve([{
    id: 'TXDOOL-3CLKJ-7GSKLC',
    pair: 'XLTCXXBT',
    time: 1519898642.899,
    type: 'sell',
    ordertype: 'limit',
    price: '0.01958100',
    fee: '0.00000509',
    volume: 0.10000000
  },
  {
    id: 'ORZHUE-SYBVN-Z5KG22',
    pair: 'XLTCZUSD',
    time: 1524701646.3571,
    type: 'buy',
    ordertype: 'market',
    price: '144.31000',
    fee: '3.75206',
    volume: 10.0000000
  }])
  // })
  // .catch(e => console.log(e))
}
