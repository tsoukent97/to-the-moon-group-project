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
    if (result.length) {
      const trades = result[1].sort((a, b) => {
        return a[2] > b[2]
          ? -1
          : a[2] < b[2]
            ? 1
            : 0
      }).map(trade => {
        return {
          id: trade[2],
          time: new Date(trade[2] * 1000).toTimeString().slice(0, 8),
          price: trade[0],
          volume: trade[1],
          side: trade[3] === 'b' ? 'buy' : 'sell',
          type: trade[4] === 'l' ? 'Limit' : 'Market'
        }
      })
      addNewTrades(trades)
    }
  })
}

export function closeSocket () {
  socket.close()
}
