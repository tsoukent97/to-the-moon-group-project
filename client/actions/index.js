export const ERROR_MESSAGE = 'ERROR_MESSAGE'

export function errorMessage (errorMessage) {
  return {
    type: ERROR_MESSAGE,
    errorMessage: errorMessage
  }
}
