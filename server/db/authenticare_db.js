const { connection } = require('./connection')

module.exports = {
  userExists,
  getUserByName
}

function userExists (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .then(result => {
      if (undefined) {
        return false
      } else {
        return true
      }
    })
}

function getUserByName (username, db = connection) {
  console.log(db, 'line21')
  return db('users').select()
    .where('username', username)
    .first()
}

