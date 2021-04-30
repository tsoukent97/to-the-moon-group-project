import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav () {
  return (
    <>
      <NavLink to='/'>Home </NavLink>
      <IfNotAuthenticated>
        <NavLink to='/signin'> Sign In </NavLink>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <NavLink to='/signin' onClick={logOff}>Log Off</NavLink>
      </IfAuthenticated>
    </>
  )
}

export default Nav
