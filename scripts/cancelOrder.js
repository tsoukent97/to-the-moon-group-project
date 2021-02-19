const { callKraken } = require('../server/kraken/kraken')

const txid = process.argv[2]
if (!txid) {
  console.log('oi, no txid')
  return
}

callKraken('CancelOrder', { txid })
  .then(res => {
    console.log(res)
    return null
  })
  .catch(e => {
    console.log(e)
  })
