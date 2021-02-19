import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import LiveTrades from './LiveTrades'

import { addSocketListeners, closeSocket } from '../sockets/trades'
jest.mock('../sockets/trades')

// needed to expect closeSocket not to have been called in one test
beforeEach(() => jest.resetAllMocks())

test('calls addSocketListeners and renders correct number of trades on mount', () => {
  const newTrades = [{
    id: 123456,
    time: '12:34:56',
    price: 52024.23,
    volume: 0.002,
    side: 'sell',
    type: 'limit'
  }, {
    id: 123457,
    time: '12:34:57',
    price: 51024.23,
    volume: 0.001,
    side: 'buy',
    type: 'limit'
  }]
  addSocketListeners.mockImplementation((cbFunc) => {
    cbFunc(newTrades)
  })
  render(<LiveTrades />)
  const trades = screen.getAllByRole('row')
  expect(trades).toHaveLength(3) // one row for header, two for trades
  // the matchers used below are from @testing-library/jest-dom
  expect(trades[1].children[1]).toHaveTextContent(52024.23)
  expect(trades[2].children[3]).toHaveClass('buy')
})

test('only displays latest 20 trades', () => {
  const newTrades = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 }
  ]
  addSocketListeners.mockImplementation((cbFunc) => {
    cbFunc(newTrades)
  })
  render(<LiveTrades />)
  const trades = screen.getAllByRole('row')
  expect(trades).toHaveLength(21) // one row for header, twenty for trades
})

test('merges current and new trades correctly', () => {
  const firstNewTrades = [
    { id: 1, time: '13:14:16' },
    { id: 2, time: '13:14:15' }
  ]
  const secondNewTrades = [
    { id: 3, time: '13:14:18' },
    { id: 4, time: '13:14:17' }
  ]
  addSocketListeners.mockImplementation((cbFunc) => {
    cbFunc(firstNewTrades)
    cbFunc(secondNewTrades)
  })
  render(<LiveTrades />)
  const trades = screen.getAllByRole('row')
  expect(trades).toHaveLength(5) // one row for header, four for trades
  expect(trades[1].children[0]).toHaveTextContent('13:14:18')
  expect(trades[4].children[0]).toHaveTextContent('13:14:15')
})

test('calls closeSocket on unmount', () => {
  const { unmount } = render(<LiveTrades />)
  expect(closeSocket).not.toHaveBeenCalled()
  unmount()
  expect(closeSocket).toHaveBeenCalled()
})
