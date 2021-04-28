const knex = require('knex')
const config = require('./knexfile')
const env = 'test'
const testDb = knex(config[env])

const { userExists, getUserByName } = require('./authenticare_db')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('userExists', () => {
  // test unfinished - need help
  test('returns true when user exists', () => {
    expect.assertions(1)
    const trial = userExists('ysabel', testDb)
    expect(trial).toBe(false)
  })
})

describe('getUserByName', () => {
  test('returns correct user when username is given', () => {
    expect.assertions(1)
    const user = 'ysabel'
    return getUserByName(user, testDb)
      .then(result => {
        expect(result.username).toBe(user)
        return null
      })
  })
  test('returns an object with an id, username and hash property', () => {
    expect.assertions(3)
    const user = 'ysabel'
    return getUserByName(user, testDb)
      .then(result => {
        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('username')
        expect(result).toHaveProperty('hash')
        return null
      })
  })
})
