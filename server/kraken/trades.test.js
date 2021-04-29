const KrakenClient = require('kraken-api')
const { getTradesHistory } = require ('./trades')
const { mockGetTradesHistory } = require('../testFixtures/mockGetTradesHistory')

jest.mock('kraken-api', () => jest.fn())
const fakeKraken = { api: jest.fn() }
KrakenClient.mockImplementation(() => fakeKraken)
describe('getTradesHistory', () => {
    const getHistory = mockGetTradesHistory.result
    const received = Object.keys(getHistory.trades)

    const firstTrade = getHistory.trades['TAJZ7Y-TDY4I-AAM2CR']
    
    const expected = {
        id: 'TAJZ7Y-TDY4I-AAM2CR',
        pair: firstTrade.pair,
        time: firstTrade.time,
        type: firstTrade.type,
        ordertype: firstTrade.ordertype,
        price: firstTrade.price,
        fee: firstTrade.fee,
        vol: firstTrade.vol 
    }
    
    test('calls getTradesHistory', () => {
        fakeKraken.api.mockImplementation(() => Promise.resolve({ result: getHistory}))
        return getTradesHistory()
         .then(actual => {
             expect.assertions(4)
             expect(typeof actual).toEqual('object')
             expect(actual).toHaveLength(received.length)
             expect(actual[0].id).toEqual(received[0])
             expect(expected).toMatchObject(actual[0])
             return null
         })
    })
})



