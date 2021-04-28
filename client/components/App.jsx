import React from 'react'

import Balance from './Balance.jsx'
import OpenOrders from './OpenOrders'
import AddOrder from './AddOrder'
import LiveTrades from './LiveTrades'
import CandlestickChart from './CandlestickChart'

function App () {
  return (
    <>
      <div className="app">
        <CandlestickChart />
        <Balance />
        <OpenOrders />
        <AddOrder />
        <LiveTrades />
      </div>
    </>
  )
}

export default App
