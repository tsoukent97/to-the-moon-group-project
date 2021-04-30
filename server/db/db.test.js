/* eslint-disable jest/no-conditional-expect */
const testEnv = require('./test-environment')
const db = require('./db')

let testDb = null

jest.setTimeout(30000)
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
  return db.addLogEntry('Order', 'ADD', testDb)
    .then(() => {
      return db.getLogs(testDb).select()
    })
    .then((records) => {
      return expect(records).toHaveLength(4)
    })
    .catch(err => expect(err).toBeNull())
})

test('logAddOrder adds a new record to the audit log database', () => {
  return db.logAddOrder('O5MMVR-77NIT-MCFYRH', '555', testDb)
    .then(() => {
      return db.getLogs(testDb).select()
    })
    .then((records) => {
      console.log('ADD LOG', records)
      return expect(records).toHaveLength(4)
    })
})

test('logCancelOrder adds a new record to the audit log database', () => {
  return db.logCancelOrder('OCZ3ZV-B77PU-SRDHRQ', '666', testDb)
    .then(() => {
      return db.getLogs(testDb).select()
    })
    .then((records) => {
      console.log('CANCEL LOG', records)
      return expect(records).toHaveLength(4)
    })
})
