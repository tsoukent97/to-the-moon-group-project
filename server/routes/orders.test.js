const KrakenClient = require('kraken-api')
// TODO Change line 3 to point to './orders.js'
const { callAPI } = require('../../orders')

jest.mock('kraken-api', () => jest.fn())
const fakeKraken = { api: jest.fn() }
KrakenClient.mockImplementation(() => fakeKraken)

describe('callAPI', () => {
  const apiResponse = [
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

  test('calls OpenOrders', () => {
    fakeKraken.api.mockImplementation(() => Promise.resolve({ result: apiResponse }))
    // TODO Change to openOrders function call
    return callAPI('OpenOrders')
      .then(actual => {
        expect(actual).toEqual(apiResponse)
        return null
      })
  })
})
