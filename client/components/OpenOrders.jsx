import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getOrders } from '../apis'
import CancelOrder from './CancelOrder'

function OpenOrders () {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    return refreshOrderList()
  }, [])

  function refreshOrderList () {
    getOrders()
      .then((orders) => {
        return setOrders(orders)
      })
      .catch((e) => console.log(e))
  }

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
              <td><CancelOrder order={order} refresh={refreshOrderList} /></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default connect()(OpenOrders)

