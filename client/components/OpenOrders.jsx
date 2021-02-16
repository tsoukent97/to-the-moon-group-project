import React, { useState, useEffect } from 'react'

import { getOrders } from '../apis/fruits'

// const orders = [
//   {
//     id: 'OTGZ4R-5DLAK-2LOQCQ',
//     opentm: 1613470428.006,
//     vol: '0.00020000',
//     price: '52000.0',
//     pair: 'XBTUSD',
//     type: 'sell'
//   },
//   {
//     id: 'O7ZXP3-MXHKG-4NWUHE',
//     opentm: 1613470176.8885,
//     vol: '0.00020000',
//     price: '65000.0',
//     pair: 'XBTUSD',
//     type: 'sell'
//   },
//   {
//     id: 'OZVQHL-OE55C-S3DYN2',
//     opentm: 1613470166.8788,
//     vol: '0.00020000',
//     price: '60000.0',
//     pair: 'XBTUSD',
//     type: 'sell'
//   }
// ]

function OpenOrders () {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    return getOrders()
      .then(orders => {
        setOrders(orders)
      })
  }, [])

  return (
    <>
      <h1>Open order list!</h1>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order =>
            <tr key={order.id}>
              <td>{order.type}</td>
              <td>{order.price}</td>
              <td>{order.vol}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default OpenOrders
