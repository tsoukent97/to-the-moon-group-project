const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('ysabelpswd'),
      generateHash('jatinpswd'),
      generateHash('aaronpswd'),
      generateHash('sampswd'),
      generateHash('calebpswd'),
      generateHash('kentpswd'),
      generateHash('nathanpswd'),
      generateHash('dainypswd'),
      generateHash('nicholepswd'),
      generateHash('JVpswd'),
      generateHash('johnpswd'),
      generateHash('sarahpswd')
    ]))
    .then(([ysabelHash, jatinHash, aaronHash, samHash, calebHash, kentHash, nathanHash, dainyHash, nicholeHash, jvHash, johnHash, sarahHash]) => {
      return knex('users').insert([
        { id: 1, username: 'ysabel', hash: ysabelHash },
        { id: 2, username: 'jatin', hash: jatinHash },
        { id: 3, username: 'aaron', hash: aaronHash },
        { id: 4, username: 'sam', hash: samHash },
        { id: 5, username: 'caleb', hash: calebHash },
        { id: 6, username: 'kent', hash: kentHash },
        { id: 7, username: 'nathan', hash: nathanHash },
        { id: 8, username: 'dainy', hash: dainyHash },
        { id: 9, username: 'nichole', hash: nicholeHash },
        { id: 10, username: 'JV', hash: jvHash },
        { id: 11, username: 'john', hash: johnHash },
        { id: 12, username: 'sarah', hash: sarahHash }

      ])
    })
}
