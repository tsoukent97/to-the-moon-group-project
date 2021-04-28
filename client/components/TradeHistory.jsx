import React, { useState, useEffect } from 'react'
// import { kent and dainys stuff } from '../apis'
import { addSocketListeners, closeSocket } from '../sockets/trades'

function TradeHistory () {
  const [trades, setTrades] = useState([])

  return (
    <>
      <h1>Trade History</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Pair</th>
            <th>Time</th>
            <th>Type</th>
            <th>Ordertype</th>
            <th>Price</th>
            <th>Fee</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {trades.map(())}
        </tbody>
      </table>
    </>
  )
}

export default TradeHistory
