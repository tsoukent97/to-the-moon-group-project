const WebSocket = require('ws')

const ws = new WebSocket('wss://ws.kraken.com')

const event = {
  event: 'subscribe',
  pair: [
    'XBT/USD'
  ],
  subscription: {
    name: 'ticker'
  }
}

ws.on('open', () => {
  console.log('connected')
  ws.send(JSON.stringify(event))
})

ws.on('message', (data) => {
  console.log(data)
})
