import React from 'react'

import Balance from './Balance.jsx'
import OpenOrders from './OpenOrders'
import AddOrder from './AddOrder'

function App(props) {
  return (
    <>
      <div className="app">
        <Balance />
        <OpenOrders />
        <AddOrder />
      </div>
    </>
  )
}

export default App
