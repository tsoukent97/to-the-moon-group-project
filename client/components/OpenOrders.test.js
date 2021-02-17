import React from 'react'
import { screen, render } from '@testing-library/react'

import OpenOrders from './OpenOrders'

test('render a <tr></tr> for each order item', () => {
  render(<OpenOrders/>)
  const tr = (screen.getAllByRole('row'))
  expect(tr).toHaveLength(4)
})
