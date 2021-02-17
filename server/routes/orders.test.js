const request = require('supertest')
const server = require('../server')
const api = require('../ordersAPI')

const mockOpenOrders = [
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

const baseURL = '/api/v1/orders'

jest.mock('../ordersAPI', () => {
  return {
    openOrders: jest.fn()
  }
})

describe('GET /api/v1/orders', () => {
  it('responds with an open orders array', () => {
    api.openOrders.mockImplementation(() => Promise.resolve(mockOpenOrders))

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
