const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('ysabelpswd'),
      generateHash('jatinpswd')
    ]))
    .then(([ysabelHash, jatinHash]) => {
      return knex('users').insert([
        { id: 1, username: 'ysabel', hash: ysabelHash },
        { id: 2, username: 'jatin', hash: jatinHash }
      ])
    })
}
