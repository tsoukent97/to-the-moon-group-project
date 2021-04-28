/* eslint-disable jest/no-conditional-expect */
const testEnv = require('./test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('get logs gets all the logs', () => {
  const expected = 3
  return db.getLogs(testDb)
    .then(logs => {
      const actual = logs.length
      return expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})