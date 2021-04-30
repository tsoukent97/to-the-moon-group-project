import React from 'react'
import Balance from './Balance.jsx'
import OpenOrders from './OpenOrders'
import AddOrder from './AddOrder'
import LiveTrades from './LiveTrades'
import TradeHistory from './TradeHistory'
import CandlestickChart from './CandlestickChart'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.jsx'

function Homepage () {
  return (
    <>
      <IfAuthenticated>
        <Balance/>
        <OpenOrders/>
        <TradeHistory/>
        <AddOrder/>
        <LiveTrades/>
      </IfAuthenticated>

      <IfNotAuthenticated>
        <CandlestickChart/>
        <LiveTrades/>
      </IfNotAuthenticated>
    </>
  )
}

export default Homepage
