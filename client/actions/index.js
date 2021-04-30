export const ERROR_MESSAGE = 'ERROR_MESSAGE'
export const CLOSE_MESSAGE = 'CLOSE_MESSAGE'

export function setError (errorMessage) {
  return {
    type: ERROR_MESSAGE,
    errorMessage: errorMessage
  }
}

export function closeErrorMessage (errorMessage) {
  return {
    type: CLOSE_MESSAGE,
    errorMessage: errorMessage
  }
}
