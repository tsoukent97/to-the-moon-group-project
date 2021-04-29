const config = require('./knexfile').development
const database = require('knex')(config)

function getLogs (db = database) {
  return db('audit-log').select()
}

function addLogEntry (newEntry, db = database) {
  return db('audit-log').insert({ newEntry })
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
