export const ERROR_MESSAGE = 'ERROR_MESSAGE'
export const SET_OPEN_ORDERS = 'SET_OPEN_ORDERS'

export function setError (errorMessage) {
  return {
    type: ERROR_MESSAGE,
    errorMessage: errorMessage
  }
}

export function setOpenOrders (orders) {
  return {
    type: SET_OPEN_ORDERS,
    orders: orders
  }
}
