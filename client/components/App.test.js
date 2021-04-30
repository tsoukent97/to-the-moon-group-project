import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Homepage from './Homepage'

import App from './App'

jest.mock('./Homepage')

Homepage.mockImplementation(() => (<div></div>))

test('navigation', () => {
  render(<App/>, { wrapper: MemoryRouter })

  expect(screen.getByText('Home')).toBeInTheDocument()

  const leftClick = { button: 0 }
  fireEvent.click(screen.getByText('Sign In'), leftClick)

  expect(screen.getByPlaceholderText('enter your username')).toBeInTheDocument()
})
