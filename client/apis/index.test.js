import nock from 'nock'

import { getBalance } from './index'

describe('getBalance', () => {
  // fakeData = ['data that looks real']
  // fakeData = { key: 'whatever i want' }
  const testData = [
    { token: 'BTC', amount: '0.001', usdPrice: '49500.00', usdValue: '495.00' },
    { token: 'USD', amount: '10', usdPrice: '1', usdValue: '10' }
  ]

  // create a nock for '/apiv1/balance'
  const scope = nock('http://localhost')
    .get('/api/v1/balance/')
    // have the nock send back the fakeData
    .reply(200, testData)

  test('receiving data from server side API', () => {
    expect.assertions(2)
    // execute getBalance
    // assert it sends back fakeData
    return getBalance()
      .then(newData => {
        expect(newData).toEqual(testData)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})
