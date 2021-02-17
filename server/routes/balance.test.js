const request = require('supertest')

const server = require('../server.js')
const { getBalances, getAssetInfo } = require('../kraken')

jest.mock('../kraken', () => ({
  getBalances: jest.fn(),
  getAssetInfo: jest.fn(),
}))

test('getBalances resolves with balance object', () => {
  getBalances.mockImplementation(() => {
    return Promise.resolve({
      balance: {
        error: [],
        result: {
          ZUSD: '9.9840',
          XXBT: '0.0017530100',
          XLTC: '0.0001500000',
          XETH: '0.0000068000',
        },
      },
    })
  })
  getAssetInfo.mockImplementation(() => {
    return Promise.resolve({
      token: 'LUKLHD',
      amount: 48754,
      priceUsd: 34598,
      amountUsd: 423024,
    })
  })
  request(server)
    .get('/api/v1/balance')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      //more tests about the response
      expect(getBalances).toHaveBeenCalled()
      expect(getAssetInfo).toHaveBeenCalled()
    })
})
