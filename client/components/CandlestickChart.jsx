import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import { addSocketListeners, closeSocket } from '../sockets/candlestick'
import { getPrevCandles } from '../apis'

const CandlestickChart = () => {
  const [candles, setCandles] = useState([])
  // const [series, setSeries] = useState([])
  const [lastCandle, setLastCandle] = useState('')

  useEffect(() => {
    getPastCandles()

    addSocketListeners((newCandle) => {
      // console.log(newCandle)
      if (newCandle[1] !== lastCandle) {
      //  console.log('NEW CANDLE!?')
        setLastCandle(newCandle[1])
      }
    })

    return () => {
      closeSocket()
    }
  }, [])

//call rest API to get historic candles
//subscribe sockets Api to get running candle
//is the end time different to the endtime of the last candle - if it is add new candle
//Mess around with 1 min candles
//call formatSeries 

  const getPastCandles = () => {
    getPrevCandles()
      .then(prevCandles => {
        setCandles(prevCandles.result.XXBTZUSD.splice(-100))
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

  if (candles.length > 0) {
    const currentLastCandle = candles[candles.length - 1]
    const lastClose = currentLastCandle[4]
    console.log(lastCandle)
    console.log(currentLastCandle)
    if (lastClose !== lastCandle[5]) {
      overWriteLastCandle()
    } else if (Number(lastCandle[0]) - 60 > currentLastCandle[0] ) {
      getPastCandles()
    }
  }

  function overWriteLastCandle() {
    const currentLastCandle = candles[candles.length - 1]
    currentLastCandle[2] = lastCandle[3]
    currentLastCandle[3] = lastCandle[4]
    currentLastCandle[4] = lastCandle[5]
    currentLastCandle[5] = lastCandle[6]
    currentLastCandle[6] = lastCandle[7]
    currentLastCandle[7] = lastCandle[8]
    candles.splice(99, 1, currentLastCandle)
    setCandles(candles)
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
