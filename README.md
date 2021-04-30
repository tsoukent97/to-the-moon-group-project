# To the Moon

## orders api

The GET /api/v1/orders/open request will send back an object as follows:
```
[
  {
    id: 'OTGZ4R-5DLAK-2LOQCQ',
    opentm: 1613470428.006,
    vol: '0.00020000',
    price: '52000.0',
    pair: 'XBTUSD',
    type: 'sell' 
  },
  {
    id: 'O7ZXP3-MXHKG-4NWUHE',
    opentm: 1613470176.8885,
    vol: '0.00020000',
    price: '65000.0',
    pair: 'XBTUSD',
    type: 'sell'
  },
  {
    id: 'OZVQHL-OE55C-S3DYN2',
    opentm: 1613470166.8788,
    vol: '0.00020000',
    price: '60000.0',
    pair: 'XBTUSD',
    type: 'sell'
  }
]
```

The GET /api/v1/balance request will send back an object as follows:
```
[
  {
    token: 'XXBTZUSD',
    amount: 9.98,
    amountUsd: '0.00020000',
    valueUsd: '52000.0',
  },
  {
    token: 'XLTCZUSD',
    amount: 3.2,
    amountUsd: '0.00020000',
    valueUsd: '52000.0',
  },
  
]
```

The GET /api/v1/trades request will send back an object like
```
[
      {
        id: 'TXDOOL-3CLKJ-7GSKLC',
        pair: 'XLTCXXBT',
        time: 1519898642.899,
        type: 'sell',
        ordertype: 'limit',
        price: '0.01958100',
        fee: '0.00000509',
        vol: 0.10000000'
      },
      {
        id: 'ORZHUE-SYBVN-Z5KG22'',
        pair: 'XLTCZUSD',
        time: 1524701646.3571,
        type: 'buy',
        ordertype: 'market',
        price: '144.31000',
        fee: '3.75206',
        vol: 10.0000000'
      }
    ]
```
