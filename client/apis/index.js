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
  console.log(id)
  return request.post(rootUrl + `/orders/cancel/${id}`)
    .send(id)
    .then((res) => res.body)
    .catch(e => console.log(e))
}
