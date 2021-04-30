import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import { addSocketListeners, closeSocket } from '../sockets/candlestick'
import { getCandles } from '../apis'

const CandlestickChart = () => {
  const [candles, setCandles] = useState([])
  const [lastCandle, setLastCandle] = useState('')

  useEffect(() => {
    getPastCandles()

    addSocketListeners((newCandle) => {
      if (newCandle[1] !== lastCandle) {
        setLastCandle(newCandle[1])
      }
    })

    return () => {
      closeSocket()
    }
  }, [])

  const getPastCandles = () => {
    getCandles(1)
      .then(prevCandles => {
        if (prevCandles.result.XXBTZUSD.length > 100) {
          setCandles(prevCandles.result.XXBTZUSD.splice(-100))
        } else {
          setCandles(prevCandles.result.XXBTZUSD.splice(-(prevCandles.length)))
        }
        return null
      })
      .catch(e => console.error(e.message))
  }

  const formatSeries = (lastCandles) => {
    return [
      {
        data: lastCandles.map((candle) => {
          return {
            x: new Date(candle[0] * 1000),
            y: [candle[1], candle[2], candle[3], candle[4]]
          }
        })
      }
    ]
  }

  if (candles.length > 0 && lastCandle) {
    const currentLastCandle = candles[candles.length - 1]
    const lastClose = currentLastCandle[4]
    if (lastClose !== lastCandle[5]) {
      overWriteLastCandle()
    } else if (Number(lastCandle[0]) - 60 > currentLastCandle[0]) {
      getPastCandles()
    }
  }

  function overWriteLastCandle () {
    const currentLastCandle = candles[candles.length - 1]
    if (lastCandle) {
      for (let i = 1; i < 8; i++) {
        currentLastCandle[i] = lastCandle[i + 1]
      }
      if (candles.length > 100) {
        candles.splice(99, 1, currentLastCandle)
      } else {
        candles.splice(candles.length - 1, 1, currentLastCandle)
      }
      setCandles(candles)
    }
  }

  const series = formatSeries(candles)

  const options = {
    title: {
      text: 'CandleStick Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }

  return (
    <Chart options={options} series={series} type="candlestick" width="700"/>
  )
}

export default CandlestickChart
