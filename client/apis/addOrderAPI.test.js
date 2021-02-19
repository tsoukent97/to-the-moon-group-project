import nock from 'nock'

import { addOrder } from './index'

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
      .post('/api/v1/orders/add', testAddOrder)
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
      .post('/api/v1/orders/add', testAddOrder)
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
