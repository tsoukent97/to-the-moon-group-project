import { combineReducers } from 'redux'
import errorReducer from './errorMessage'

export default combineReducers({
  errorMessage: errorReducer
})
