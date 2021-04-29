const config = require('./knexfile').development
const database = require('knex')(config)

function getLogs (db = database) {
  return db('audit-log').select()
}

function addLogEntry (newOrder, newAction, db = database) {
  return db('audit-log').insert({ user_id: '007', order_id: '4', description: newOrder, action: newAction })
}

function logAddOrder (orderId, userId, db = database) {
  return db('audit-log').insert({ order_id: orderId, user_id: userId })
}

function logCancelOrder (orderId, userId, db = database) {
  return db('audit-log').del()
    .where('id', orderId, userId)
}

module.exports = {
  addLogEntry,
  getLogs,
  logAddOrder,
  logCancelOrder
}
