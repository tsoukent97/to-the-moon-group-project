const KrakenClient = require('kraken-api')
const { openOrders } = require('./ordersAPI')
const { mockOpenOrders } = require('./utilities/mockOpenOrders')

jest.mock('kraken-api', () => jest.fn())
const fakeKraken = { api: jest.fn() }
KrakenClient.mockImplementation(() => fakeKraken)

describe('openOrders', () => {
  const apiResponse = mockOpenOrders.result
  const received = Object.keys(apiResponse.open)
  test('calls OpenOrders', () => {
    fakeKraken.api.mockImplementation(() => Promise.resolve({ result: apiResponse }))
    return openOrders()
      .then(actual => {
        expect.assertions(4)
        expect(typeof actual).toEqual('object')
        expect(actual).toHaveLength(received.length)
        expect(actual[0].id).toEqual(received[0])
        // TODO Check that actual[0]'s keys exist inside apiResponse's objects...
        expect(actual[0]).toMatchObject(apiResponse.open[received[0]])
        return null
      })
  })
})
