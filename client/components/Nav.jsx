import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav () {
  return (

    <Router>
      <Link to='/'>Home </Link>
      <IfNotAuthenticated>
        <Link to='/signin'> Sign In </Link>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <Link to='/' onClick={logOff}>Log Off</Link>
      </IfAuthenticated>
    </Router>
  )
}

export default Nav
