import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { isAuthenticated } from 'authenticare/client'

import Homepage from './Homepage'
import Balance from './Balance.jsx'
import OpenOrders from './OpenOrders'
import AddOrder from './AddOrder'
import LiveTrades from './LiveTrades'
import TradeHistory from './TradeHistory'

jest.mock('authenticare/client', () => {
  return {
    isAuthenticated: jest.fn()
  }
})

jest.mock('./Balance.jsx', () => jest.fn())
jest.mock('./OpenOrders.jsx', () => jest.fn())
jest.mock('./AddOrder.jsx', () => jest.fn())
jest.mock('./LiveTrades.jsx', () => jest.fn())
jest.mock('./TradeHistory.jsx', () => jest.fn())

describe('if user is autheticated', () => {
  test('shows 5 components when authenticated', () => {
    expect.assertions(1)

    isAuthenticated.mockImplementation(() => true)
    Balance.mockImplementation(() => { return <button>balance</button> })
    OpenOrders.mockImplementation(() => { return <button>open orders</button> })
    AddOrder.mockImplementation(() => { return <button>add order</button> })
    LiveTrades.mockImplementation(() => { return <button>live trades</button> })
    TradeHistory.mockImplementation(() => { return <button>trade history</button> })

    render(<Homepage/>)

    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(5)
  })

  test('shows the correct compnents', () => {
    expect.assertions(5)

    isAuthenticated.mockImplementation(() => true)
    Balance.mockImplementation(() => { return <button>balance</button> })
    OpenOrders.mockImplementation(() => { return <button>open orders</button> })
    AddOrder.mockImplementation(() => { return <button>add order</button> })
    LiveTrades.mockImplementation(() => { return <button>live trades</button> })
    TradeHistory.mockImplementation(() => { return <button>trade history</button> })

    render(<Homepage/>)
    const button = screen.getAllByRole('button')

    expect(button[0].innerHTML).toContain('balance')
    expect(button[1].innerHTML).toContain('open orders')
    expect(button[2].innerHTML).toContain('trade history')
    expect(button[3].innerHTML).toContain('add order')
    expect(button[4].innerHTML).toContain('live trades')
  })
})

describe('if user is not autheticated', () => {
  test('shows one component when not authenticated', () => {
    expect.assertions(1)
    isAuthenticated.mockImplementation(() => false)
    LiveTrades.mockImplementation(() => { return <button>live trades</button> })

    render(<Homepage/>)
    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(1)
  })

  test('shows the correct component', () => {
    expect.assertions(1)
    isAuthenticated.mockImplementation(() => false)
    LiveTrades.mockImplementation(() => { return <button>live trades</button> })

    render(<Homepage/>)
    const button = screen.getAllByRole('button')
    expect(button[0].innerHTML).toContain('live trades')
  })
})
