import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { isAuthenticated } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

jest.mock('authenticare/client', () => {
  return {
    isAuthenticated: jest.fn()
  }
})

describe('isAuthenticated', () => {
  test('returns children when true', () => {
    isAuthenticated.mockImplementation(() => true)
    expect.assertions(1)
    render(<IfAuthenticated><button>Click</button></IfAuthenticated>)
    const button = screen.findAllByRole('button')
    expect(button).not.toBeUndefined()
  })
  test('returns null when false', () => {
    isAuthenticated.mockImplementation(() => false)
    expect.assertions(1)
    render(<IfAuthenticated><button data-testid='button'>Click</button></IfAuthenticated>)
    const button = screen.queryByTestId('button')
    expect(button).not.toBeInTheDocument()
  })
})

describe('isNotAuthenticated', () => {
  test('returns children when false', () => {
    isAuthenticated.mockImplementation(() => false)
    expect.assertions(1)
    render(<IfNotAuthenticated><button>Click</button></IfNotAuthenticated>)
    const button = screen.findAllByRole('button')
    expect(button).not.toBeUndefined()
  })
  test('returns null when true', () => {
    isAuthenticated.mockImplementation(() => true)
    expect.assertions(1)
    render(<IfNotAuthenticated><button data-testid='button'>Click</button></IfNotAuthenticated>)
    const button = screen.queryByTestId('button')
    expect(button).not.toBeInTheDocument()
  })
})
