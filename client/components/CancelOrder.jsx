import React from 'react'
import { cancelOrder } from '../apis'

function CancelOrder (props) {
  const { id } = props.order
  console.log(id)

  function handleCancel (e) {
    e.preventDefault()
    cancelOrder(id)
  }

  return (
    <>
      <button onClick={handleCancel}>Cancel Order</button>
    </>
  )
}

export default CancelOrder
