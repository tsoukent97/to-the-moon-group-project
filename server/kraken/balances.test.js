const KrakenClient = require('kraken-api')
const { getBalances, getAssetInfo } = require('./balances')

const { mockGetBalance, ticker } = require('../testFixtures/mockGetBalance')

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
      expect.assertions(2)
      const firstExpected =
              {
                token: 'XXBT',
                amount: '0.0017530100',
                usdPrice: '52152.90000',
                usdValue: 91.424555229
              }
      expect(actual[0]).toMatchObject(firstExpected)
      expect(actual).toHaveLength(3)

      return null
    })
  })
})
