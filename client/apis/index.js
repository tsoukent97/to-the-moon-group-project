import request from 'superagent'

const rootUrl = '/api/v1'

export function getOrders () {
  return request.get(rootUrl + '/orders/open')
    .then(res => {
      return res.body
    })
    .catch(e => console.log(e))
}
