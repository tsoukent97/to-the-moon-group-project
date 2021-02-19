import React from 'react'
import { cancelOrder } from '../apis'

function CancelOrder (props) {
  const { id } = props.order
  console.log('line 6', id)
  const { refresh } = props
  console.log('line 8', refresh)

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
