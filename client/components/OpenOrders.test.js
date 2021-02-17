import React from 'react'
import { screen, render } from '@testing-library/react'

import OpenOrders from './OpenOrders'

test('render a <tr></tr> for each order item', () => {
  render(<OpenOrders/>)
  const tr = (screen.getAllByRole('row'))
  expect(tr).toHaveLength(4)
})

// import request from 'supertest'
// import server from '../../server/server'
// import { getOrders } from './index'

// jest.mock('./index', () => {
//   return {
//     getOrders:jest.fn()
//   }
// })

// describe('getOrders', () => {
//   test('Test is working', () => {
//     expect(1).toEqual(1)
//   })
//   test('getOrders to return some orders', (done) => {
//     getOrders.mockImplementation(() => {
//       return Promise.resolve([
//         {
//           id: 'OTGZ4R-5DLAK-2LOQCQ',
//           opentm: 1613470428.006,
//           vol: '0.00020000',
//           price: '52000.0',
//           pair: 'XBTUSD',
//           type: 'sell'
//         },
//         {
//           id: 'O7ZXP3-MXHKG-4NWUHE',
//           opentm: 1613470176.8885,
//           vol: '0.00020000',
//           price: '65000.0',
//           pair: 'XBTUSD',
//           type: 'sell'
//         }
//         ])
//     })
//     expect.assertions(1)
//     request(server)
//       .get('/openOrders')
//       .then((res) => {
//         console.log(res.body)
//         expect((res.body).length).toEqual(2)
//         done()
//     })
//   })
// })
