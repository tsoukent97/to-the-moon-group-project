const { getUserByName } = require('../server/db/authenticare_db')

getUserByName('jatin')
  .then((res) => console.log(res))
  .catch(e => console.log(e))
