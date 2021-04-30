import { SET_OPEN_ORDERS } from '../actions'

const initialState = []

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_OPEN_ORDERS:
            let retreiveOrders = {
                orders: action.orders
            }
    }
}