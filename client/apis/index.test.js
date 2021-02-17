import request from 'supertest'
import express from 'express'
import getBalance from './index'

jest.mock('./index', () => {
  return getBalance: jest.fn()
})

describe('getBalance', () => {
  test('is working', () => {
    expect.assertions(1)
    expect(1).toEqual(1)
  })

  test('receiving data from server side API', () => {
    expect.assertions(1)
    getBalance.mockImplementation(() => {
      return Promise.resolve([
          { token: 'BTC', amount: '0.001', usdPrice: '49500.00', usdValue: '495.00' },
          { token: 'USD', amount: '10', usdPrice: '1', usdValue: '10' }
      ])
    })
    request(server).get('./balance'
    )

  })
})
