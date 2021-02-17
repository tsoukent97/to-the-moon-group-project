import request from 'supertest'
import express from 'express'

import { getBalance } from './index'

//remove the mock for getBalance
jest.mock('./index', () => {
  return getBalance: jest.fn()
})


describe('getBalance', () => {
  //get rid of this as soon as it works
  test('is working', () => {
    expect.assertions(1)
    expect(1).toEqual(1)
  })

  test('receiving data from server side API', () => {
    expect.assertions(1)
    //create a nock for '/apiv1/balance'
    //have the nock send back the fakeData

    fakeData = ['data that looks real']
    fakeData = {key: 'whatever i want'}
    getBalance.mockImplementation(() => {
      return Promise.resolve([
          { token: 'BTC', amount: '0.001', usdPrice: '49500.00', usdValue: '495.00' },
          { token: 'USD', amount: '10', usdPrice: '1', usdValue: '10' }
      ])
    })
    //execute getBalance
    //assert it sends back fakeData
    request(server).get('./balance'
    )

  })
})
