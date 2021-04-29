const config = require('./knexfile').development
const database = require('knex')(config)

function getLogs (db = database) {
  return db('audit-log').select()
}

function addLogEntry (newOrder, newAction, db = database) {
  return db('audit-log').insert({ user_id: '007', description: newOrder, action: newAction })
}

function logAddOrder (orderId, userId, db = database) {

}

function logCancelOrder (orderId, userId, db = database) {

}

module.exports = {
  addLogEntry,
  getLogs,
  logAddOrder,
  logCancelOrder
}
