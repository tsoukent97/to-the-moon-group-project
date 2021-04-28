const express = require('express')
const { getTradesHistory } = require('../kraken/trades')

const router = express.Router()


router.get('/trade', (req, res) => {

    getTradesHistory()
        .then((result) => {
            return res.json(result)
        })
        .catch(err => console.log(err))
})


module.exports = router