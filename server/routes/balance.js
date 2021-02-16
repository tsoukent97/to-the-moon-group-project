// require('dotenv').config()
// const KrakenClient = require('kraken-api')

// const key = process.env.KRAKEN_API_KEY
// const secret = process.env.KRAKEN_API_SECRET
// const kraken = new KrakenClient(key, secret)
const kraken = require('../../kraken')

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  kraken.api('Balance').then((bal) => {
    const tokens = Object.keys(bal.result)
    let pairs = ''
    tokens.map((token) => {
      if (token !== 'ZUSD') {
        pairs += `${token}ZUSD, `
      }
    })
    return kraken.api('Ticker', { pair:  pairs.slice(0, -2)})
      .then(response => {
        res.json( [
          {
            token: tokens[1],
            amount: bal.result[tokens[1]],
            priceUsd: response.result[tokens[1]+'ZUSD'].c[0],
            amountUsd: bal.result[tokens[1]] * response.result[tokens[1]+'ZUSD'].c[0]
          },
          {
            token: tokens[2],
            amount: bal.result[tokens[2]],
            priceUsd: response.result[tokens[2]+'ZUSD'].c[0],
            amountUsd: bal.result[tokens[2]] * response.result[tokens[2]+'ZUSD'].c[0]
          },
          {
            token: tokens[3],
            amount: bal.result[tokens[3]],
            priceUsd: response.result[tokens[3]+'ZUSD'].c[0],
            amountUsd: bal.result[tokens[3]] * response.result[tokens[3]+'ZUSD'].c[0]
          },
        ])
      })
      .catch(e => {
        console.log(e)
      })
  })
})




module.exports = router