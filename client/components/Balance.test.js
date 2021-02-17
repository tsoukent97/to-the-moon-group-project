import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'

import { getBalance } from '../apis'
import Balance from './Balance'

jest.mock('../apis')

test('render a <tr></tr> for each balance item', () => {
  render(<Balance />)
  const tr = (screen.getAllByRole('row'))
  expect(tr).toHaveLength(1)
})

test('sadfuydiflu', async () => {
  getBalance.mockImplementation(() => Promise.resolve([
    { token: 'BTC', amount: '0.001', usdPrice: '49500.00', usdValue: '495.00' },
    { token: 'USD', amount: '10', usdPrice: '1', usdValue: '10' }]))
  render(<Balance />)
  const cryptoToken = screen.getAllByTestId('testData')
  expect(cryptoToken.innerHTML).toEqual(4)
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toEqual('Wallet Balance')
  await waitFor(() => getBalance.mock.calls.length > 0)
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
