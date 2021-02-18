const KrakenClient = require('kraken-api')
const { getBalances, getAssetInfo } = require('./kraken')

const { mockGetBalance, ticker } = require('./testFixtures/mockGetBalance')

jest.mock('kraken-api', () => jest.fn())
const fakeKraken = { api: jest.fn() }
KrakenClient.mockImplementation(() => fakeKraken)

describe('getBalances', () => {
  test('calls getBalances', () => {
    fakeKraken.api.mockImplementation(() => {
      return Promise.resolve(mockGetBalance)
    })
    return getBalances().then(actual => {
      expect.assertions(1)
      expect(typeof actual).toEqual('object')
      expect.objectContaining(mockGetBalance.balance)
      return null
    })
  })
})

describe('getAssetInfo', () => {
  test('calls getAssetInfo', () => {
    fakeKraken.api.mockImplementation(() => {
      return Promise.resolve(ticker)
    })
    return getAssetInfo(mockGetBalance.balance).then(actual => {
      expect.assertions(1)
      expect(typeof actual).toEqual('object')
      expect.arrayContaining({
        token: String,
        amount: Number,
        priceUsd: Number,
        amountUsd: Number
      })
      return null
    })
  })
})
