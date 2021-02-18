import nock from 'nock'

import { addOrder } from './index'

describe('addOrder', () => {
  // TODO figure out how to get hold of the exact shape of data they are expecting
  const testAddOrder =
  {
    pair: 'XXBT',
    price: 65000.0,
    type: 'sell'
    // vol: 0.00020000
  }
  // TODO figure out how to get hold of the actual reponse object
  const testResponseData = {
    descr: {
      order: '',
      close: ''
    },
    txid: []
  }
  const scope = nock('http://localhost')
    .post('/api/v1/orders/add', { testAddOrder })
    .reply(201, testResponseData)

  test('posts new order', () => {
    expect.assertions(2)

    return addOrder(testAddOrder)
      .then((response) => {
        expect(response).toEqual(testResponseData)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})
