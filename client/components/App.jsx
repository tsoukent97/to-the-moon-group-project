import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

<<<<<<< HEAD
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
=======
import Homepage from './Homepage'
import Nav from './Nav'
import SignIn from './SignIn'

function App () {
  return (
    <div className="app">
      <Router>
        <Route path='/' component={Nav}/>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/signin' component={SignIn}/>
      </Router>
    </div>
>>>>>>> 81e0c3fbe41a110ec9280d856e6c455a22f68198
  )
}

export default App
