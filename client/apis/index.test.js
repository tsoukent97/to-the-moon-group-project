import nock from 'nock'

import { getBalance, cancelOrder, getOrders, addOrder } from './index'

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
        expect(e.message).toEqual('Doh, it failed')
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('getOrders', () => {
  const fakeBody = [
    {
      id: 'OTGZ4R-5DLAK-2LOQCQ',
      opentm: 1613470428.006,
      vol: '0.00020000',
      price: '52000.0',
      pair: 'XBTUSD',
      type: 'sell'
    },
    {
      id: 'O7ZXP3-MXHKG-4NWUHE',
      opentm: 1613470176.8885,
      vol: '0.00020000',
      price: '65000.0',
      pair: 'XBTUSD',
      type: 'sell'
    },
    {
      id: 'OZVQHL-OE55C-S3DYN2',
      opentm: 1613470166.8788,
      vol: '0.00020000',
      price: '60000.0',
      pair: 'XBTUSD',
      type: 'sell'
    }
  ]
  const scope = nock('http://localhost').get('/api/v1/orders/open').reply(200, fakeBody)

  test('returns body of response', () => {
    return getOrders()
      .then((orders) => {
        expect(orders).toEqual(fakeBody)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('addOrder', () => {
  const testAddOrder =
  {
    pair: 'XXBTZUSD',
    price: '65000.0',
    type: 'sell'
  }
  // afterEach(() => nock.cleanAll())

  describe('when happy', () => {
    const scopeSuccess = nock('http://localhost')
      .post('/api/v1/orders/add', { order: testAddOrder })
      .reply(201)

    test('posts new order', () => {
      expect.assertions(2)

      return addOrder(testAddOrder)
        .then((response) => {
          expect(response).toBeNull()
          expect(scopeSuccess.isDone()).toBe(true)
          return null
        })
    })
  })

  describe('api call fails', () => {
    const scopeFail = nock('http://localhost')
      .post('/api/v1/orders/add', { order: testAddOrder })
      .reply(500, 'oh no!')

    test('when call fails', () => {
      expect.assertions(3)

      return addOrder(testAddOrder)
        .catch((err) => {
          expect(err.status).toBe(500)
          expect(err.response.text).toBe('oh no!')
          expect(scopeFail.isDone()).toBe(true)
          return null
        })
    })
  })
})
