const config = require('./knexfile').development
const database = require('knex')(config)

function getLogs (db = database) {
  return db('audit-log').select()
}

function addLogEntry (newOrder, newAction, db = database) {
  return db('audit-log').insert({ user_id: '007', order_id: '4', description: newOrder, action: newAction })
}

function logAddOrder (orderId, userId, db = database) {
  const { newOrderId } = orderId
  const { newUserId } = userId
  return db('audit-log').insert({ order_id: newOrderId, user_id: newUserId })
}

function logCancelOrder (orderId, userId, db = database) {
  return db('audit-log').del()
    .where('order_id', orderId, userId)
}

module.exports = {
  addLogEntry,
  getLogs,
  logAddOrder,
  logCancelOrder
}
