import { combineReducers } from 'redux'

import activePair from './activePair'
import openOrders from './openOrders'

export default combineReducers({
  activePair,
  openOrders
})
