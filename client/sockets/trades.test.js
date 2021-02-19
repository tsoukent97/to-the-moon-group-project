import { addSocketListeners, closeSocket, formatTrades } from './trades'

import socket from './krakenWebSocket'
jest.mock('./krakenWebSocket', () => {
  return {
    addEventListener: jest.fn(),
    send: jest.fn(),
    close: jest.fn()
  }
})

describe('addSocketListeners', () => {
  test('sends trade subscription on open', () => {
    expect.assertions(3)
    socket.addEventListener.mockImplementation((event, cbFunc) => {
      event === 'open' && cbFunc()
    })
    socket.send.mockImplementation((req) => {
      expect(typeof req).toBe('string')
      const request = JSON.parse(req)
      expect(request.event).toBe('subscribe')
      expect(request.subscription.name).toBe('trade')
    })
    addSocketListeners()
  })

  test('sends trade unsubscription on close', () => {
    expect.assertions(3)
    socket.addEventListener.mockImplementation((event, cbFunc) => {
      event === 'close' && cbFunc()
    })
    socket.send.mockImplementation((req) => {
      expect(typeof req).toBe('string')
      const request = JSON.parse(req)
      expect(request.event).toBe('unsubscribe')
      expect(request.subscription.name).toBe('trade')
    })
    addSocketListeners()
  })

  describe('on message', () => {
    test('does nothing if response data is a string object', () => {
      socket.addEventListener.mockImplementation((event, cbFunc) => {
        const response = { data: JSON.stringify({ content: 'irrelevant' }) }
        event === 'message' && cbFunc(response)
      })
      const addNewTrades = jest.fn()
      addSocketListeners(addNewTrades)
      expect(addNewTrades).not.toHaveBeenCalled()
    })

    test('formats and adds new trades if response data contains trades', () => {
      socket.addEventListener.mockImplementation((event, cbFunc) => {
        // the response data from kraken is weird... just doing the minimum for
        // testing purposes. please bear with :)
        const response = {
          data: JSON.stringify([
            null,
            [
              ['', '', '3'],
              ['', '', '2']
            ]
          ])
        }
        event === 'message' && cbFunc(response)
      })
      const addNewTrades = jest.fn()
      addSocketListeners(addNewTrades)
      expect(addNewTrades).toHaveBeenCalled()
      const trades = addNewTrades.mock.calls[0][0]
      expect(trades).toHaveLength(2)
    })
  })
})

test('closeSocket closes the socket', () => {
  expect(socket.close).not.toHaveBeenCalled()
  closeSocket()
  expect(socket.close).toHaveBeenCalled()
})

describe('formatTrades', () => {
  test('formats a trade correctly', () => {
    const trades = [
      ['52000.80000', '0.10000000', '1613635208.262214', 'b', 'l']
    ]
    const [formattedTrade] = formatTrades(trades)
    expect(formattedTrade.id).toMatch('161363')
    expect(formattedTrade.time).toBe('9:00:08')
    expect(formattedTrade.price).toBe('52000.80')
    expect(formattedTrade.volume).toMatch('0.10')
    expect(formattedTrade.side).toMatch('buy')
    expect(formattedTrade.type).toMatch('limit')
  })

  test('side and type properties render "sell" and "market" correctly', () => {
    const trades = [
      ['', '', '', 's', 'm']
    ]
    const [formattedTrade] = formatTrades(trades)
    expect(formattedTrade.side).toMatch('sell')
    expect(formattedTrade.type).toMatch('market')
  })

  test('sorts trades by time (latest first)', () => {
    const trades = [
      ['', '', '2'],
      ['', '', '1'],
      ['', '', '3']
    ]
    const formattedTrades = formatTrades(trades)
    expect(formattedTrades[0].id).toBe('3')
    expect(formattedTrades[2].id).toBe('1')
  })
})
