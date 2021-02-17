import React from 'react'

import Balance from './Balance.jsx'
import OpenOrders from './OpenOrders'

import LiveTrades from './LiveTrades'

function App (props) {
  return (
    <>
      <div className='app'>
        <Balance />
        <OpenOrders />
        <LiveTrades />
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
