import React, { useState, useEffect } from 'react'
// import { getHistory } from '../apis'

function TradeHistory () {
  const [trades, setTrades] = useState([])

  useEffect(() => {
    return refreshTradeHistory()
  }, [])

  function refreshTradeHistory () {
    getHistory()
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
          {/* trades map () => {
          } */}
        </tbody>
      </table>
    </>
  )
}

export default TradeHistory
