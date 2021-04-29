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

test('addLogEntry adds a new record to the audit log database', () => {
  expect.assertions(1)
  return db.addLogEntry('Order', 'ADD', testDb)
    .then(() => {
      return db.getLogs(testDb).select()
        .then((records) => {
          console.log(records)
          expect(records).toHaveLength(4)
          return null
        })
        .catch(err => expect(err).toBeNull())
    })
})
