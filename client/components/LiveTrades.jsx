import React, { useState, useEffect } from 'react'

import { onNewTrades, closeSocket } from '../apis/tradesWebSocket'

function LiveTrades () {
  const [trades, setTrades] = useState([])

  useEffect(() => {
    onNewTrades((newTrades) => {
      setTrades((prevTrades) => {
        return [...newTrades, ...prevTrades].slice(0, 20)
      })
    })

    return () => {
      closeSocket()
    }
  }, [])

  return (
    <>
      <h1>Live Trades!</h1>
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
            const { id, time, price, volume, side, type } = trade
            return <tr key={id}>
              <td>{time}</td>
              <td>{price}</td>
              <td>{volume}</td>
              <td className={side}>{side}</td>
              <td>{type}</td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  )
}

export default LiveTrades
