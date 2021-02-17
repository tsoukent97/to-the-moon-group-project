import React, { useState, useEffect } from 'react'

function LiveTrades () {
  const socket = new WebSocket('wss://ws.kraken.com')
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
    result.length && addNewTrades(result[1])
  })

  function addNewTrades (newTrades) {
    setTrades((prevTrades) => [...prevTrades, ...newTrades])
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Price</th>
          <th>Volume</th>
          <th>Side</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {trades.map((trade) => {
          return <tr key={trade[2]}>
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
