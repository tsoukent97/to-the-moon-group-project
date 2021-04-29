import socket from './krakenWebSocket'
// const { socket } = require('./krakenWebSocket')

export function addSocketListeners (updateCandle) {
  socket.addEventListener('open', () => {
    socket.send(JSON.stringify({
      event: 'subscribe',
      pair: [
        'XBT/USD'
      ],
      subscription: {
        interval: 60,
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
    if ((response.event === undefined || response.event !== 'heartbeat') && (response[0] === 331)) {
      updateCandle(response)
    }
  })
}

export function closeSocket () {
  socket.close()
}

// module.exports = {
//   closeSocket,
//   addSocketListeners
// }


//call rest API to get historic candles
//subscribe sockets Api to get running candle
//is the end time different to the endtime of the last candle - if it is add new candle
//Mess around with 1 min candles
