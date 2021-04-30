import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { isAuthenticated } from 'authenticare/client'
import { MemoryRouter } from 'react-router-dom'

import Nav from './Nav'

jest.mock('authenticare/client', () => {
  return {
    isAuthenticated: jest.fn()
  }
})

describe('if authenticated', () => {
  test('shows log off and home link', () => {
    expect.assertions(2)
    isAuthenticated.mockImplementation(() => true)
    render(<Nav/>, { wrapper: MemoryRouter })
    const logOff = screen.getByText('Log Off')
    const home = screen.getByText('Home')
    expect(logOff).toBeInTheDocument()
    expect(home).toBeInTheDocument()
  })
})

describe('if not authenticated', () => {
  test('shows sign in and home link', () => {
    expect.assertions(2)
    isAuthenticated.mockImplementation(() => false)
    render(<Nav/>, { wrapper: MemoryRouter })
    const signIn = screen.getByText('Sign In')
    const home = screen.getByText('Home')
    expect(signIn).toBeInTheDocument()
    expect(home).toBeInTheDocument()
  })
})
