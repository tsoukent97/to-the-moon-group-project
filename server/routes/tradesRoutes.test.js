const request = require('supertest')
const server = require('../server')
const api = require('../kraken/trades')

const { mockReturnTradesHistory } = require('../testFixtures/mockGetTradesHistory')

const baseURL = '/api/v1/trades'

jest.mock('../kraken/trades', () => {
  return {
    getTradesHistory: jest.fn()
  }
})

describe('GET /api/v1/trades/trade', () => {
  it('responds with trade history array', () => {
    api.getTradesHistory.mockImplementation(() => Promise.resolve(mockReturnTradesHistory))

    return request(server)
      .get(baseURL + '/trade')
      .expect(200)
      .then(res => {
        expect(typeof res.body).toEqual('object')
        expect(res.body).toEqual(mockReturnTradesHistory)
        return null
      })
  })
})
