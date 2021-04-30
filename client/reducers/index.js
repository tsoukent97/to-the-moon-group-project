import { combineReducers } from 'redux'
import activePair from './activePair'
import setError from './errorMessage'
import openOrders from './openOrders'

export default combineReducers({
  activePair,
  errorMessage: setError,
  openOrders
})
