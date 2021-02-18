import nock from 'nock'
import { getOrders } from './index'

describe('getOrders', () => {
  const fakeBody = [
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
  const scope = nock('http://localhost').get('/api/v1/openOrders').reply(200, fakeBody)

  test('returns body of response', () => {
    return getOrders()
      .then((orders) => {
        expect(orders).toEqual(fakeBody)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})
