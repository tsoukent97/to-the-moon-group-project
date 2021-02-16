const KrakenClient = require('kraken-api')
const { callAPI } = require('./demo')

jest.mock('kraken-api', () => jest.fn())
const fakeKraken = { api: jest.fn() }
KrakenClient.mockImplementation(() => fakeKraken)

describe('callAPI', () => {
  const apiResponse = {
    XLTCZUSD: {
      a: ['206.51000', '232', '232.000'],
      b: ['206.50000', '1', '1.000'],
      c: ['206.51000', '0.23854000'],
      v: ['140403.00903213', '151803.31097262'],
      p: ['211.71788', '211.58365'],
      t: [14263, 15979],
      l: ['200.45000', '200.45000'],
      h: ['221.99000', '221.99000'],
      o: '208.45000'
    },
    XXBTZUSD: {
      a: ['48655.30000', '1', '1.000'],
      b: ['48645.30000', '1', '1.000'],
      c: ['48634.70000', '0.10877126'],
      v: ['5614.57266168', '5978.33392402'],
      p: ['48992.14059', '48937.90840'],
      t: [59778, 64845],
      l: ['47040.10000', '47040.10000'],
      h: ['50599.90000', '50599.90000'],
      o: '47937.10000'
    }
  }
  test('calls ticker', () => {
    fakeKraken.api.mockImplementation(() => Promise.resolve({ result: apiResponse }))
    return callAPI()
      .then(actual => {
        expect(actual).toEqual(apiResponse)
        return null
      })
  })
})
