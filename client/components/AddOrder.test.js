import React from 'react'
import { render, screen/* , fireEvent */ } from '@testing-library/react'

import AddOrder from './AddOrder'
// import { addOrder } from '../apis/index'

describe('<AddOrder/>', () => {
  const mockOrder = {
    pair: 'XXBTZUSD',
    price: '50',
    type: 'Buy'
  }

  test.skip('correct pair is sent', () => {
    render(<AddOrder/>)
    const pair = screen.getByTestId('pair')
    expect(pair.value).toEqual(mockOrder.pair)
  })
})
