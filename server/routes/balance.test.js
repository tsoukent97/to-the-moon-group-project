const request = require('supertest')
const { getBalances, getAssetInfo } = require('../kraken')

const server = require('../server.js')

jest.mock('../kraken',  () => {
  return {
    getBalances: jest.fn(),
    getAssetInfo: jest.fn()
  }
})

test('/balance route returns an array of objects', () => {
  const expected = true
  
})

test('getBalances returns {pairs, tokens, balances} object', () => {
  getBalances.mockImplemention(() => Promise.resolve({
    pairs: 'XXBTZUSD, XLTCZUSD, XETHZUSD', 
    tokens: [ 'XXBT', 'XLTC', 'XETH' ], 
    balance: {
      error: [],
      result: {
        ZUSD: '9.9840',
        XXBT: '0.0017530100',
        XLTC: '0.0001500000',
        XETH: '0.0000068000'
      }
    }
  }))
  return request(server)
    .get('/api/v1/balance')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      //more tests about the response
      console.log(res.body)
      expect(Array.isArray(res.body)).toBeTruthy()
    })
})
