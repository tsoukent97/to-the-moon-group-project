import { combineReducers } from 'redux'
import setError from './errorMessage'

export default combineReducers({
  errorMessage: setError
})
