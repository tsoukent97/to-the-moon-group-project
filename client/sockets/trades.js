import socket from './krakenWebSocket'

export function addSocketListeners (addNewTrades) {
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

  socket.addEventListener('message', (res) => {
    const response = JSON.parse(res.data)
    if (response.length) {
      const trades = formatTrades(response[1])
      addNewTrades(trades)
    }
  })
}

export function closeSocket () {
  socket.close()
}

export function formatTrades (trades) {
  return trades
    .sort((a, b) => {
      return a[2] > b[2]
        ? -1
        : a[2] < b[2]
          ? 1
          : 0
    })
    .map(trade => {
      return {
        id: trade[2],
        time: new Date(trade[2] * 1000).toLocaleTimeString().slice(0, 8),
        price: trade[0].slice(0, -3),
        volume: trade[1],
        side: trade[3] === 'b' ? 'buy' : 'sell',
        type: trade[4] === 'l' ? 'limit' : 'market'
      }
    })
}
