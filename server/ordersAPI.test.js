const KrakenClient = require('kraken-api')
const { openOrders } = require('./ordersAPI')
const { mockData } = require('./utilities/mockData')

jest.mock('kraken-api', () => jest.fn())
const fakeKraken = { api: jest.fn() }
KrakenClient.mockImplementation(() => fakeKraken)

describe('openOrders', () => {
  const apiResponse = mockData

  test('calls OpenOrders', () => {
    fakeKraken.api.mockImplementation(() => Promise.resolve({ result: apiResponse }))
    return openOrders()
      .then(actual => {
        console.log(actual)
        expect(actual).not.toEqual(apiResponse)
        return null
      })
  })
})
