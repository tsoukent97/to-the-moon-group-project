import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav () {
  return (

    <div>
      <Link to='/'>Home </Link>
      <IfNotAuthenticated>
        <Link to='/signin'> Sign In </Link>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <Link to='/' onClick={logOff}>Log Off</Link>
      </IfAuthenticated>
    </div>
  )
}

export default Nav
