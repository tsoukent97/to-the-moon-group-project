const request = require('supertest')
const server = require('../server')
const api = require('../kraken/ordersAPI')

const { mockReturnOpenOrders } = require('../testFixtures/mockOpenOrders')

const baseURL = '/api/v1/orders'

jest.mock('../kraken/ordersAPI', () => {
  return {
    openOrders: jest.fn(),
    cancelOrder: jest.fn()
  }
})

describe('GET /api/v1/orders/open', () => {
  it('responds with an open orders array', () => {
    api.openOrders.mockImplementation(() => Promise.resolve(mockReturnOpenOrders))

    return request(server)
      .get(baseURL + '/open')
      .expect(200)
      .then(res => {
        expect(typeof res.body).toEqual('object')
        expect(res.body).toEqual(mockReturnOpenOrders)
        return null
      })
  })
})

describe('POST /api/v1/orders/cancel/:txid', () => {
  test('return 200 if cancel happens', () => {
    // const fakeData = { error: [], result: { count: 1 } }
    // const fakeTxid = '123abc'
    api.cancelOrder.mockImplementation(() => Promise.resolve())

    return request(server)
      .post(baseURL + '/cancel/123abc')
      .then(res => {
        expect(res.status).toEqual(200)
        expect(api.cancelOrder).toHaveBeenCalledWith('123abc')
        return null
      })
  })

  test('return 500 if cancel blows up', () => {
    const err = new Error('reasons')
    api.cancelOrder.mockImplementation(() => Promise.reject(err))

    return request(server)
      .post(baseURL + '/cancel/123abc')
      .then(res => {
        expect(res.status).toBe(500)
        // expect(res.text).toBe('reasons')
        expect(api.cancelOrder).toHaveBeenCalledWith('123abc')
        return null
      })
  })
})
