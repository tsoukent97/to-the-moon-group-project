import socket from './krakenWebSocket'
// const { socket } = require('./krakenWebSocket')
import { filter } from './filter'

export function addSocketListeners (updateCandle) {
  socket.addEventListener('open', () => {
    socket.send(JSON.stringify({
      event: 'subscribe',
      pair: [
        'XBT/USD'
      ],
      subscription: {
        interval: 1,
        name: 'ohlc'
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
        name: 'ohlc'
      }
    }))
  })

  socket.addEventListener('message', (res) => {
    const response = JSON.parse(res.data)
    filter(response, 'ohlc', () => {
      updateCandle(response)
    })
  })
}

export function closeSocket () {
  socket.close()
}

// module.exports = {
//   closeSocket,
//   addSocketListeners
// }
