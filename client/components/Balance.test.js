import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'

import { getBalance } from '../apis'
import Balance from './Balance'

jest.mock('../apis')

test('render a <tr></tr> for each balance item', () => {
  //mock out getBalance
  render(<Balance />)
  const tr = (screen.getAllByRole('row'))
  expect(tr).toHaveLength(1)
})

test.only('sadfuydiflu', async () => {
  getBalance.mockImplementation(() => Promise.resolve([
    { token: 'BTC', amount: '0.001', usdPrice: '49500.00', usdValue: '495.00' },
    { token: 'USD', amount: '10', usdPrice: '1', usdValue: '10' }]))
  render(<Balance />)

  await waitFor(() => getBalance.mock.calls.length > 0)

  //try using getAllByRole('gridcell')
  const cryptoToken = screen.getAllByTestId('testData')
  //screen.debug()
  expect(cryptoToken.innerHTML).toEqual(4)
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toEqual('Wallet Balance')

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
