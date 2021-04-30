export const SET_OPEN_ORDERS = 'SET_OPEN_ORDERS'

export function setOpenOrders (orders) {
  return {
    type: SET_OPEN_ORDERS,
    orders: orders
  }
}
