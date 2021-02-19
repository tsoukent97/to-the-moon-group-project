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
    .send({order})
    .then(res => {
      if (res.status !== 201) throw new Error(res.text)
      return null
    })
}
