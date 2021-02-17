import React, { useEffect } from 'react'

function LiveTrades () {
  const socket = new WebSocket('wss://ws.kraken.com')

  useEffect(() => {
    socket.addEventListener('open', () => {
      socket.send(JSON.stringify({ event: 'ping', reqid: 123 }))
    })
    socket.addEventListener('message', (data) => {
      console.log(data)
    })
    return () => {
      socket.close()
    }
  }, [])
  return (
    <>
     hello
    </>
  )
}

export default LiveTrades
