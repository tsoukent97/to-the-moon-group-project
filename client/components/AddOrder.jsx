import React, { useState } from 'react'

import { addOrder } from '../apis/index'

const AddOrder = () => {
  const [order, setOrder] = useState({
    pair: 'XXBTZUSD',
    price: '50',
    type: 'Buy'
  })

  const handleSubmit = e => {
    e.preventDefault()
    addOrder(order)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setOrder({ ...order, [name]: value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pair">Select Pair</label>
        <select name="pair" id="pair" onChange={handleChange}>
          <option value="XXBTZUSD">XXBTZUSD</option>
          <option value="XLTCZUSD">XLTCZUSD</option>
          <option value="XETHZUSD">XETHZUSD</option>
        </select>
        <label htmlFor="price"></label>
        <input
          onChange={handleChange}
          type="range"
          id="price"
          name="price"
          min="0"
          max=""
          value={order.price}
        />
        <label htmlFor="type">Buy/Sell</label>
        <select name="type" id="type" onChange={handleChange}>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </form>
    </div>
  )
}

export default AddOrder
