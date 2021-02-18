const request = require('supertest')
const server = require('../server')

const { getBalances, getAssetInfo } = require('../kraken.js')

const {
  mockGetBalance,
  mockGetAssetInfo
} = require('../testFixtures/mockGetBalance')

jest.mock('../kraken', () => ({
  getBalances: jest.fn(),
  getAssetInfo: jest.fn()
}))

test('/balance api route', () => {
  getBalances.mockImplementation(() => {
    return Promise.resolve(mockGetBalance)
  })
  getAssetInfo.mockImplementation(() => {
    return Promise.resolve(mockGetAssetInfo)
  })
  return request(server)
    .get('/api/v1/balance')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body).toEqual(mockGetAssetInfo)
      return null
    })
})
