import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'

import { getBalance } from '../apis'
import Balance from './Balance'

jest.mock('../apis')

test('render a <tr></tr> for each balance item', async () => {
  // mock out getBalance
  getBalance.mockImplementation(() => Promise.resolve([
    { token: 'BTC', amount: '0.001', usdPrice: '49500.00', usdValue: '495.00' },
    { token: 'USD', amount: '10', usdPrice: '1', usdValue: '10' }]))
  render(<Balance />)
  await waitFor(() => getBalance.mock.calls.length > 0)
  const row = (screen.getAllByRole('rowgroup'))
  expect(row).toHaveLength(2)
})

test('sadfuydiflu', async () => {
  getBalance.mockImplementation(() => Promise.resolve([
    { token: 'BTC', amount: '0.001', usdPrice: '49500.00', usdValue: '495.00' },
    { token: 'USD', amount: '10', usdPrice: '1', usdValue: '10' }]))
  render(<Balance />)

  await waitFor(() => getBalance.mock.calls.length > 0) // Don't fully understand this <---

  const cryptoToken = screen.getAllByRole('cell')

  expect(cryptoToken).toHaveLength(12)
  expect(cryptoToken[0].innerHTML).toEqual('Token')
  expect(cryptoToken[4].innerHTML).toEqual('BTC')
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toEqual('Wallet Balance')
})
