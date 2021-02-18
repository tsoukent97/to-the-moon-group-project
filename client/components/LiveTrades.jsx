import React, { useState, useEffect } from 'react'

function LiveTrades () {
  const socket = new WebSocket('wss://ws.kraken.com/')
  const [trades, setTrades] = useState([])

  useEffect(() => {
    socket.addEventListener('open', () => {
      socket.send(JSON.stringify({
        event: 'subscribe',
        pair: [
          'XBT/USD'
        ],
        subscription: {
          name: 'trade'
        }
      }))
    })

    socket.addEventListener('close', () => {
      socket.send(JSON.stringify({
        event: 'unsubscribe',
        pair: [
          'XBT/USD'
        ],
        subscription: {
          name: 'trade'
        }
      }))
    })

    return () => {
      socket.close()
    }
  }, [])

  socket.addEventListener('message', (res) => {
    const result = JSON.parse(res.data)
    result.length && setTrades((prevTrades) => {
      const newTrades = [...result[1], ...prevTrades]
      return newTrades.sort((a, b) => {
        return a[2] > b[2]
          ? -1
          : a[2] < b[2]
            ? 1
            : 0
      }).slice(0, 20)
    })
  })

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
