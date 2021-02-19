import React from 'react'

import Balance from './Balance.jsx'
import OpenOrders from './OpenOrders'
import LiveTrades from './LiveTrades'

function App () {
  return (
    <>
      <div className='app'>
        <Balance />
        <OpenOrders />
        <LiveTrades />
      </div>
    </>
  )
}

export default App
