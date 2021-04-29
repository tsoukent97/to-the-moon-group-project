export const ERROR_MESSAGE = 'ERROR_MESSAGE'

export function setError (errorMessage) {
  return {
    type: ERROR_MESSAGE,
    errorMessage: errorMessage
  }
}
