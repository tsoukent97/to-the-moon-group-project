import request from 'superagent'

const rootUrl = '/api/v1'

// export function getFruits () {
//   return request.get(rootUrl + '/fruits')
//     .then(res => {
//       return res.body.fruits
//     })
// }

export function getBalance () {
  return request.get(rootUrl + '/balance/')
    .then(res => {
      console.log(res.body)
      return res.body
    })
    .catch(e => console.log(e))

  // return Promise.resolve(data)
}
