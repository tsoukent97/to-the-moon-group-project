import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getTrades } from '../apis'
import TradeHistory from './TradeHistory'

jest.mock('../apis')
test('render a <tr></tr> for each TradeHistory item', async () => {
  getTrades.mockImplementation(() => Promise.resolve([
    {
      id: 'TXDOOL-3CLKJ-7GSKLC',
      pair: 'XLTCXXBT',
      time: 1519898642.899,
      type: 'sell',
      ordertype: 'limit',
      price: '0.01958100',
      fee: '0.00000509',
      volume: 0.10000000
    }
  ]))
  render(<TradeHistory />)
  await waitFor(() => getTrades.mock.calls.length > 0)
  const row = (screen.getAllByRole('rowgroup'))
  expect(row).toHaveLength(2)
})
