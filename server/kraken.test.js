const KrakenClient = require('kraken-api')
const { getBalances, getAssetInfo } = require('./kraken')

const {
  mockGetBalance,
  mockGetAssetInfo
} = require('./testFixtures/mockGetBalance')

jest.mock('kraken-api', () => jest.fn())
const fakeKraken = { api: jest.fn() }
KrakenClient.mockImplementation(() => fakeKraken)

describe('getBalances', () => {
  const { result } = mockGetBalance.balance

  test('calls getBalances', () => {
    fakeKraken.api.mockImplementation(() => {
      return Promise.resolve(mockGetBalance)
    })
    return getBalances().then(actual => {
      expect.assertions(2)
      expect(typeof actual).toEqual('object')
      expect(actual.balance.result).toHaveLength(result)

      // TODO some others stuff
      return null
    })
  })
})
