import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Homepage from './Homepage'
import Balance from './Balance.jsx'
import OpenOrders from './OpenOrders'
import AddOrder from './AddOrder'
import LiveTrades from './LiveTrades'
import TradeHistory from './TradeHistory'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.jsx'

test('shows children when authenticated', () => {
  render(<Homepage>
      <IfAuthenticated>
        <Balance/>
        <OpenOrders/>
        <AddOrder/>
        <LiveTrades/>
        <TradeHistory/>
      </IfAuthenticated>
    </Homepage>)
  const { children } = render(<IfAuthenticated/>)
    expect(children).not.toBeUndefined()
})