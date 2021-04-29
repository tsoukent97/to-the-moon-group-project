import React from 'react'

import { render, screen, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import SignIn from './SignIn'

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
