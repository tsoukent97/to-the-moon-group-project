import React from 'react'
import { cancelOrder } from '../apis'

function CancelOrder (props) {
  const { id } = props.order
  console.log(id)
  const { refresh } = props
  console.log(refresh)

  function handleCancel (e) {
    e.preventDefault()
    cancelOrder(id)
      .then(() => refresh())
      .catch((e) => console.log(e))
  }

  return (
    <>
      <button onClick={handleCancel}>Cancel Order</button>
    </>
  )
}

export default CancelOrder
