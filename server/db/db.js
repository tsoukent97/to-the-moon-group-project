const config = require('./knexfile').development
const database = require('knex')(config)

function addLogEntry (db = database) {

}

module.exports = {
  addLogEntry
}
