import React from 'react'

import Balance from './Balance.jsx'
import OpenOrders from './OpenOrders'

function App (props) {
  return (
    <>
      <div className='app'>
        <Balance />
        <OpenOrders />
      </div>
    </>
  )
}

export default App
