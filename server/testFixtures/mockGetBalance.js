const mockGetBalance = {
  balance: {
    error: [],
    result: {
      ZUSD: '9.9840',
      XXBT: '0.0017530100',
      XLTC: '0.0001500000',
      XETH: '0.0000068000'
    }
  }
}

const mockGetAssetInfo = [
  {
    token: 'XXBT',
    amount: '0.0015530100',
    priceUsd: '52186.10000',
    amountUsd: 81.045535161
  },
  {
    token: 'XLTC',
    amount: '0.0001500000',
    priceUsd: '234.43000',
    amountUsd: 0.0351645
  },
  {
    token: 'XETH',
    amount: '0.0000068000',
    priceUsd: '1909.32000',
    amountUsd: 0.012983376
  }
]

module.exports = { mockGetBalance, mockGetAssetInfo }
