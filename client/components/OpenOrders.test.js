import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'

import OpenOrders from './OpenOrders'
import { getOrders } from '../apis'
import { Provider } from 'react-redux'

jest.mock('../apis')

const store = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}

test('render a <tr></tr> for each openOrders item', async () => {
  getOrders.mockImplementation(() => {
    return Promise.resolve([
      {
        id: 'OTGZ4R-5DLAK-2LOQCQ',
        opentm: 1613470428.006,
        vol: '0.00020000',
        price: '52000.0',
        pair: 'XBTUSD',
        type: 'sell'
      },
      {
        id: 'O7ZXP3-MXHKG-4NWUHE',
        opentm: 1613470176.8885,
        vol: '0.00020000',
        price: '65000.0',
        pair: 'XBTUSD',
        type: 'sell'
      }
    ])
  })

  render(<Provider store={store}><OpenOrders/></Provider>)
  
  await waitFor(() => {
    return getOrders.mock.calls.length > 0
  })
  const row = (screen.getAllByRole('row'))
  expect(row).toHaveLength(3)
})
