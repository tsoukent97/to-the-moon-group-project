import { ERROR_MESSAGE } from '../actions'
import { CLOSE_MESSAGE } from '../actions'

function setError (state = '', action) {
  switch (action.type) {
    case ERROR_MESSAGE:
      return action.errorMessage

    case CLOSE_MESSAGE:
      return state

    default:
      return state
  }
}

export default setError
