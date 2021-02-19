import nock from 'nock'

import { getBalance, cancelOrder } from './index'

describe('getBalance', () => {
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

describe('cancelOrder - successful', () => {
  const testId = 'OTYWJ7-2X5J7-WO2NSU'

  const scope = nock('http://localhost')
    .post(`/api/v1/orders/cancel/${testId}`)
    .reply(200)

  test('receiving data from server side API', () => {
    expect.assertions(2)

    return cancelOrder(testId)
      .then((actual) => {
        expect(actual).toBeNull()
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('cancelOrder - failed', () => {
  const testId = 'OTYWJ7-2X5J7-WO2NST'

  const scope = nock('http://localhost')
    .post(`/api/v1/orders/cancel/${testId}`)
    .reply(500, 'Doh, it failed')

  test('receiving data from server side API', () => {
    expect.assertions(2)

    return cancelOrder(testId)
      .then(() => {
        return null
      })
      .catch((e) => {
        console.log(e)
        expect(e.message).toEqual('Doh, it failed')
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})
