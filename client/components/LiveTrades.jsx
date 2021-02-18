import React, { useState, useEffect } from 'react'

import { onNewTrades, closeSocket } from '../apis/tradesWebSocket'

function LiveTrades () {
  const [trades, setTrades] = useState([])

  useEffect(() => {
    onNewTrades((newTrades) => {
      setTrades((prevTrades) => {
        const trades = [...newTrades, ...prevTrades]
        return trades.sort((a, b) => {
          return a[2] > b[2]
            ? -1
            : a[2] < b[2]
              ? 1
              : 0
        }).slice(0, 20)
      })
    })

    return () => {
      closeSocket()
    }
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Price</th>
          <th>Volume</th>
          <th>Side</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {trades.map((trade) => {
          return <tr key={trade[2]}>
            <td>{new Date(trade[2] * 1000).toTimeString().slice(0, 8)}</td>
            <td>{trade[0]}</td>
            <td>{trade[1]}</td>
            <td>{trade[3] === 'b' ? 'Buy' : 'Sell'}</td>
            <td>{trade[4] === 'l' ? 'Limit' : 'Market'}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default LiveTrades
