const request = require('supertest')
const server = require('../server')
const api = require('../ordersAPI')

const { mockReturnOpenOrders } = require('../utilities/mockOpenOrders')

const baseURL = '/api/v1/orders'

jest.mock('../ordersAPI', () => {
  return {
    openOrders: jest.fn()
  }
})

describe('GET /api/v1/orders', () => {
  it('responds with an open orders array', () => {
    api.openOrders.mockImplementation(() => Promise.resolve(mockReturnOpenOrders))

    return request(server)
      .get(baseURL + '/open')
      .expect(200)
      .then(res => {
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveLength(3)
        return null
      })
  })
})
