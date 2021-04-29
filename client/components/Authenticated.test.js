import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

test('returns Null', () => {
  expect.assertions(1)
  render(<IfAuthenticated prop='testing'/>)
})