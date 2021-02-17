import React from 'react'
import { screen, render } from '@testing-library/react'

import Balance from './Balance'

test('render a <tr></tr> for each balance item', () => {
  render(<Balance />)
  const tr = (screen.getAllByRole('row'))
  expect(tr).toHaveLength(1)
})

// jest.mock('./index', () => {
//   return { getBalance: jest.fn() }
// })

// describe('getBalance', () => {
//   test('is working', () => {
//     expect.assertions(1)
//     expect(1).toEqual(1)
//   })

//   test('receiving data from server side API', () => {
//     expect.assertions(1)
//     getBalance.mockImplementation(() => {
//       return Promise.resolve([
//         { token: 'BTC', amount: '0.001', usdPrice: '49500.00', usdValue: '495.00' },
//         { token: 'USD', amount: '10', usdPrice: '1', usdValue: '10' }
//       ])
//     })
//   })
// })

// test('', () => {
//   render(<Balance />)
//   const tr = (screen.getAllByRole('row'))
//   expect(tr).toHaveLength(1)
// })
