import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'

import CancelOrder from './CancelOrder'
import { cancelOrder } from '../apis'

jest.mock('../apis')

test('that testing is working', async () => {
  expect.assertions(1)
  expect(1).toEqual(1)
})

// test('cancel button gets rendered', async () => {
//   cancelOrder().mockimplementation(() => {

//   })
// })

test('cancelOrder function is called with an id', async () => {
  expect.assertions(1)
  cancelOrder.mockimplementation(() => Promise.resolve()

  await waitFor(() => cancelOrder.mock.calls.length > 0)

  //expect...

  })
})

// test('response is received', async () => {
//   expect.assertions(1)
//   expect(1).toEqual(1)
// })

// test('refreshOrderList function is called', async () => {
//   expect.assertions(1)
//   expect(1).toEqual(1)
// })
