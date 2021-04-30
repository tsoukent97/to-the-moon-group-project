import { SET_OPEN_ORDERS } from '../actions'

const initialState = []

export default function (state = initialState, action) {
    console.log(state)
    switch (action.type) {
        case SET_OPEN_ORDERS:
            return action.orders
        default: 
            return state
    }
}

