import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setOpenOrders } from '../actions'
import { getOrders } from '../apis'
import CancelOrder from './CancelOrder'

function OpenOrders (props) {
  useEffect(() => {
    setTimeout(refreshOrderList, 500)
  }, [])

  function refreshOrderList () {
    getOrders()
      .then((orders) => {
        props.dispatch(setOpenOrders(orders))
        return null
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
          {props.orders.map(order =>
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

const mapStateToProps = reduxState => {
  return {
    orders: reduxState.openOrders
  }
}

export default connect(mapStateToProps)(OpenOrders)
