import React from 'react'

import Balance from './Balance.jsx'
import OpenOrders from './OpenOrders'
import CancelOrder from './CancelOrder'

function App (props) {
  return (
    <>
      <div className='app'>
        <Balance />
        <OpenOrders component={CancelOrder}/>
      </div>
    </>
  )
}

export default App
