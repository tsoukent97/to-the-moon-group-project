import React from 'react'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav () {
  return (

    <div>
      <Link to='/'>Home </Link>
      <IfNotAuthenticated>
        <Link to='/signin'> Sign In </Link>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <Link to='/'>Log Off</Link>
      </IfAuthenticated>
    </div>
  )
}

export default Nav
