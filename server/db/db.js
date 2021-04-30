const config = require('./knexfile').development
const database = require('knex')(config)

function getLogs (db = database) {
  return db('audit-log').select()
}

function addLogEntry (newOrder, newAction, db = database) {
  return db('audit-log').insert({ user_id: '007', order_id: '4', description: newOrder, action: newAction })
}

function logAddOrder (orderId, userId, db = database) {
  console.log('log add order called')
  return db('audit-log').insert({ action: 'ADD', order_id: orderId, user_id: userId })
}

function logCancelOrder (orderId, userId, db = database) {
  console.log(orderId, userId, 'log cancel order called')
  return db('audit-log').insert({ action: 'CANCEl', order_id: orderId, user_id: userId })
}

module.exports = {
  addLogEntry,
  getLogs,
  logAddOrder,
  logCancelOrder
}
