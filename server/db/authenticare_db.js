const connection = require('./connection')

module.exports = {
  userExists,
  getUserByName
}

function userExists (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
    .then(result => {
      if (result === undefined) {
        return false
      } else {
        return true
      }
    })
}

function getUserByName (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
}
