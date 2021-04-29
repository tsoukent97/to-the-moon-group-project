import React, { useState, useEffect } from 'react'
import { getTrades } from '../apis'

function TradeHistory () {
  const [trades, setTrades] = useState([{}])

  useEffect(() => {
    return refreshTradeHistory()
  }, [])

  function refreshTradeHistory () {
    getTrades()
      .then((trades) => {
        return setTrades(trades)
      })
      .catch((e) => console.log(e))
  }

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
          {trades.map(trade =>
            <tr key={trade.id}>
              <td>{trade.id}</td>
              <td>{trade.pair}</td>
              <td>{trade.time}</td>
              <td>{trade.type}</td>
              <td>{trade.ordertype}</td>
              <td>{trade.price}</td>
              <td>{trade.fee}</td>
              <td>{trade.volume}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default TradeHistory
