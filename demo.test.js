const { getTicker } = require('./demo')

const callKraken = require('./kraken')
jest.mock('./kraken')

describe('getTicker', () => {
  const apiResponse = {
    XLTCZUSD: {
      a: ['206.51000', '232', '232.000'],
      b: ['206.50000', '1', '1.000']
    },
    XXBTZUSD: {
      a: ['48655.30000', '1', '1.000'],
      b: ['48645.30000', '1', '1.000']
    }
  }
  test('calls ticker', () => {
    callKraken.mockImplementation(() => Promise.resolve({ result: apiResponse }))
    return getTicker()
      .then(actual => {
        expect(actual).toEqual(apiResponse)
        return null
      })
  })
})
