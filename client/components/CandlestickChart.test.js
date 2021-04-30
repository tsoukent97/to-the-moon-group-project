import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'

import { getCandles } from '../apis'
import Chart from 'react-apexcharts'
import CandlestickChart from './CandlestickChart'
import { addSocketListeners } from '../sockets/candlestick'

jest.mock('../apis')
jest.mock('react-apexcharts', () => {
  return jest.fn()
})
jest.mock('../sockets/candlestick.js')

//mock out the functions and check that the result is as expected
//mock out chart library
//use chart props to assert if the data I have given it is proper

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

//overwrites last candle
//prints new candle
