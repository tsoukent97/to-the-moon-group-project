import { combineReducers } from 'redux'
import activePair from './activePair'
import setError from './errorMessage'

export default combineReducers({
  activePair,
  errorMessage: setError
})
