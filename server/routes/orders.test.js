const request = require('supertest')
const server = require('../server')
const api = require('../kraken/ordersAPI')

const { mockReturnOpenOrders } = require('../testFixtures/mockOpenOrders')

const baseURL = '/api/v1/orders'

const order = {
  pair: 'XXBTZUSD',
  type: 'buy',
  price: '40000'
}

const fakeAddOrderResult = {
  error: [],
  result: {
    descr: { order: 'buy 0.00020000 XBTUSD @ limit 40000.00' },
    txid: [ 'O45ABF-MSNRZ-QGT4EZ' ]
  }
}

jest.mock('../kraken/ordersAPI', () => {
  return {
    openOrders: jest.fn(),
    addOrder: jest.fn()
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

describe('POST /api/v1/orders/add', () => {
  test('takes an order object with details on order', () => {
    api.addOrder.mockImplementation(() => Promise.resolve(fakeAddOrderResult))

    return request(server)
      .post(baseURL + '/add')
      .send({
        order: order
      })
      .then(res => {
        console.log(res)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toEqual(fakeAddOrderResult)
      })
  })
})

