import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

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
  )
}

export default App
