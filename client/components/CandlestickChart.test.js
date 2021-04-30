import React from 'react'
import { render, waitFor, act } from '@testing-library/react'

import { getCandles } from '../apis'
import Chart from 'react-apexcharts'
import CandlestickChart from './CandlestickChart'
import { addSocketListeners } from '../sockets/candlestick'

jest.mock('../apis')
jest.mock('react-apexcharts', () => {
  return jest.fn()
})
jest.mock('../sockets/candlestick.js')

beforeEach(() => {
  jest.resetAllMocks()
})

test('correctly displays prev candles', async () => {
  getCandles.mockImplementation(() => Promise.resolve(
    {
      result: {
        XXBTZUSD: [
          [1000, '54464.3', '54464.3', '54456.9', '54463.6', '54464.2', '0.31933989', 10],
          [2000, '54463.7', '54464.2', '54456.7', '54463.1', '54464.9', '0.31933981', 10]
        ]
      }
    }
  ))

  const expected = [
    {
      x: new Date(1000 * 1000),
      y: ['54464.3', '54464.3', '54456.9', '54463.6']
    },
    {
      x: new Date(2000 * 1000),
      y: ['54463.7', '54464.2', '54456.7', '54463.1']
    }
  ]

  Chart.mockImplementation((props) => {
    return <div>
      Chart
    </div>
  })

  render(<CandlestickChart />)
  await waitFor(() => getCandles.mock.calls.length > 0)
  expect(Chart.mock.calls[1][0].series[0].data).toStrictEqual(expected)
})

test('correctly overwrites last candle', async () => {
  let callWebSocket = null

  addSocketListeners.mockImplementation((updateCandle) => {
    callWebSocket = () => {
      updateCandle([
        327,
        [1900, 2000, '54464.3', '54464.3', '54456.9', '54466.7', '54464.2', '0.31933989', 10],
        'ohlc-1',
        'XBT/USD'
      ])
    }
  })

  getCandles.mockImplementation(() => Promise.resolve(
    {
      result: {
        XXBTZUSD: [
          [1000, '54464.3', '54464.3', '54456.9', '54463.6', '54464.2', '0.31933989', 10],
          [2000, '54463.7', '54464.2', '54456.7', '54463.1', '54464.9', '0.31933981', 10]
        ]
      }
    }
  ))

  Chart.mockImplementation(() => {
    return <div>
      Chart
    </div>
  })

  const expected = [
    {
      x: new Date(1000 * 1000),
      y: ['54464.3', '54464.3', '54456.9', '54463.6']
    },
    {
      x: new Date(2000 * 1000),
      y: ['54464.3', '54464.3', '54456.9', '54466.7']
    }
  ]

  render(<CandlestickChart />)
  await waitFor(() => Chart.mock.calls.length > 1)
  act(callWebSocket)
  expect(Chart.mock.calls[2][0].series[0].data).toStrictEqual(expected)
})

test('correctly adds new candle', async () => {
  let callWebSocket = null

  addSocketListeners.mockImplementation((updateCandle) => {
    callWebSocket = () => {
      updateCandle([
        327,
        [2100, 3000, '54464.3', '54464.3', '54456.9', '54466.7', '54464.2', '0.31933989', 10],
        'ohlc-1',
        'XBT/USD'
      ])
    }
  })

  getCandles.mockReturnValueOnce(Promise.resolve(
    {
      result: {
        XXBTZUSD: [
          [1000, '54464.3', '54464.3', '54456.9', '54463.6', '54464.2', '0.31933989', 10],
          [2000, '54463.7', '54464.2', '54456.7', '54463.1', '54464.9', '0.31933981', 10]
        ]
      }
    }
  )).mockReturnValueOnce(Promise.resolve(
    {
      result: {
        XXBTZUSD: [
          [1000, '54464.3', '54464.3', '54456.9', '54463.6', '54464.2', '0.31933989', 10],
          [2000, '54463.7', '54464.2', '54456.7', '54463.1', '54464.9', '0.31933981', 10],
          [3000, '54463.1', '54464.4', '54456.5', '54463.9', '54464.7', '0.31933922', 10]
        ]
      }
    }
  ))

  Chart.mockImplementation(() => {
    return <div>
      Chart
    </div>
  })

  render(<CandlestickChart />)
  await waitFor(() => Chart.mock.calls.length > 1)
  act(callWebSocket)
  await waitFor(() => getCandles.mock.calls.length > 1)
  expect(Chart.mock.calls[3][0].series[0].data).toHaveLength(3)
})
