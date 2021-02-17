const express = require('express')
const path = require('path')

const openOrdersRoutes = require('./routes/openOrders.js')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/openOrders', openOrdersRoutes)

module.exports = server
