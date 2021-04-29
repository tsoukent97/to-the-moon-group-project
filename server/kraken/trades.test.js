const KrakenClient = require('kraken-api')
const { getTradesHistory } = require ('./trades')
const { mockGetTradesHistory } = require('../testFixtures/mockGetTradesHistory')

jest.mock('kraken-api', () => jest.fn())
const fakeKraken = { api: jest.fn() }
KrakenClient.mockImplementation(() => fakeKraken)
describe('getTradesHistory', () => {
    const getHistory = mockGetTradesHistory.result
    const received = Object.keys(getHistory.trades)
    const testObj = {
        id: received[0],
        pair: getHistory.trades[received[0]].pair,
        time: getHistory.trades[received[0]].time,
        type: getHistory.trades[received[0]].type,
        ordertype: getHistory.trades[received[0]].ordertype,
        price: getHistory.trades[received[0]].price,
        fee: getHistory.trades[received[0]].fee,
        volume: getHistory.trades[received[0]].volume
    }
    test('calls getTradesHistory', () => {
        fakeKraken.api.mockImplementation(() => Promise.resolve({ result: getHistory}))
        return getTradesHistory()
         .then(actual => {
             expect.assertions(4)
             expect(typeof actual).toEqual('object')
             expect(actual).toHaveLength(received.length)
             expect(actual[0].id).toEqual(received[0])
             expect(testObj).toMatchObject(actual[0])
             return null
         })
    })
})



