import React from 'react'

import Balance from './Balance.jsx'
import OpenOrders from './OpenOrders'
import AddOrder from './AddOrder'
import LiveTrades from './LiveTrades'
import TradeHistory from './TradeHistory'
import DisplayError from './DisplayError'

function App () {
  return (
    <>
      <div className="app">
        <Balance />
        <OpenOrders />
        <AddOrder />
        <DisplayError />
        <LiveTrades />
        <TradeHistory />
      </div>
    </>
  )
}

export default App
