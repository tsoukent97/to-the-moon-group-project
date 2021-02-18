const socket = new WebSocket('wss://ws.kraken.com/')

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

export function onNewTrades (addNewTrades) {
  socket.addEventListener('message', (res) => {
    const result = JSON.parse(res.data)
    result.length && addNewTrades(result[1])
  })
}

export function closeSocket () {
  socket.close()
}
