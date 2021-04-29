export const filter = (response, filterItem, callback) => {
  if ((response.event === undefined || response.event !== 'heartbeat') && (response[2] && response[2].includes(filterItem))) {
    callback()
  }
}
