const request = require('supertest')

const server = require('../server.js')
const { getBalances, getAssetInfo, mapAssetInfo } = require('../kraken')

jest.mock('../kraken', () => ({
  getBalances: jest.fn(),
  getAssetInfo: jest.fn()
}))

describe('kraken.js functions', () => {
  const balanceResponse = {
    balance: {
      error: [],
      result: {
        ZUSD: '9.9840',
        XXBT: '0.0017530100',
        XLTC: '0.0001500000',
        XETH: '0.0000068000'
      }
    }
  }
  const assetInfoResponse = [
    {
      token: 'LUKLHD',
      amount: 48754,
      priceUsd: 34598,
      amountUsd: 423024
    }
  ]

  test('calls getBalances', () => {
    getBalances.mockImplementation(() => {
      return Promise.resolve(balanceResponse)
    })
    return getBalances().then(actual => {
      expect(actual).toEqual(balanceResponse)
      return null
    })
  })

  test('calls getAssetInfo', () => {
    getAssetInfo.mockImplementation(() => {
      return Promise.resolve(assetInfoResponse)
    })
    return getAssetInfo().then(actual => {
      expect(actual).toEqual(assetInfoResponse)
      return null
    })
  })

  test('calls mapAssetInfo and return the right data', () => {
    const token = 'XXBT'
    const balance = balanceResponse
    const assetInfo = { result: { XXBTZUSD: { c: [34598] } } }

    const actual = mapAssetInfo(token, assetInfo, balance)

    expect(actual).toEqual(assetInfoResponse[0])
  })
})
