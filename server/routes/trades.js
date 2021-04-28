const express = require('express')

const router = express.Router()

const request = require('superagent')

router.get('/trades', (req, res) => {
    res.json(
        [
            {
                id: 'TXDOOL-3CLKJ-7GSKLC',
                pair: 'XLTCXXBT',
                time: 1519898642.899,
                type: 'sell',
                ordertype: 'limit',
                price: '0.01958100',
                fee: '0.00000509',
                volume: '0.10000000'
              }
        ]
    )
})


module.exports = router