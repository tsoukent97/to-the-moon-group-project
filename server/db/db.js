const config = require('./knexfile').development
const database = require('knex')(config)

function getLogs (db = database) {
  return db('audit-log').select()
}

function addLogEntry (db = database) {

}

module.exports = {
  addLogEntry,
  getLogs
}
