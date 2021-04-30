import React from 'react'
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { isAuthenticated, signIn } from 'authenticare/client'

import SignIn from './SignIn'

jest.mock('authenticare/client', () => {
  return {
    isAuthenticated: jest.fn(),
    signIn: jest.fn()
  }
})

test('renders 2 input components', () => {
  const { getByPlaceholderText } = render(<SignIn/>)
  expect(getByPlaceholderText('enter your username')).toBeInTheDocument()
  expect(getByPlaceholderText('enter your password')).toBeInTheDocument()
})

test('should submit when form has text', async () => {
  const { getByTestId, queryByText } = render(<SignIn/>)
  await act(async () => {
    fireEvent.change(screen.getByPlaceholderText('enter your username'), {
      target: { value: 'jatin' }
    })

    fireEvent.change(screen.getByPlaceholderText('enter your password'), {
      target: { value: 'jatinpswd' }
    })
  })

  await act(async () => {
    fireEvent.submit(getByTestId('form'))
  })

  expect(queryByText('Error:Username and password combination not found')).not.toBeInTheDocument()
})

describe('if user is not authenticated', () => {
  test('shows error message', async () => {
    isAuthenticated.mockImplementation(() => false)
    signIn.mockImplementation(() => Promise.reject(new Error('INVALID_CREDENTIALS')))

    render(<SignIn/>)
    const leftClick = { button: 0 }
    fireEvent.click(screen.getByRole('button'), leftClick)
    await waitFor(() => expect(signIn).toHaveBeenCalledTimes(1))

    expect(screen.getByText('Error:Username and password combination not found')).toBeInTheDocument()
  })
})

describe('if user is authenticated', () => {
  test('user is logged in', async () => {
    signIn.mockImplementation(() => Promise.resolve({ id: 2, username: 'jatin', iat: 1619740364, exp: 1619826764 }))
    isAuthenticated.mockImplementation(() => true)

    render(<SignIn/>)
    const leftClick = { button: 0 }
    fireEvent.click(screen.getByTestId('signin'), leftClick)
    await waitFor(() => expect(signIn).toHaveBeenCalledTimes(2))

    const error = screen.getByTestId('error')
    expect(error).toBeEmptyDOMElement()
  })
})
