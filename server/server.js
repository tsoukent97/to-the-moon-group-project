const express = require('express')
const path = require('path')

const balanceRoutes = require('./routes/balance')
const orderRoutes = require('./routes/orders')
const candleRoutes = require('./routes/candles')
const authRoutes = require('./routes/auth')
const tradeRoutes = require('./routes/tradesRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/balance', balanceRoutes)
server.use('/api/v1/orders', orderRoutes)
server.use('/api/v1/candles', candleRoutes)
server.use('/api/v1', authRoutes)
server.use('/api/v1/trades', tradeRoutes)

module.exports = server
