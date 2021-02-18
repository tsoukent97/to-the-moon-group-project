function mapAssetInfo(token, assetInfo, balance) {
  const amount = balance.result[token]
  const priceUsd = assetInfo.result[token + 'ZUSD'].c[0]
  return {
    token,
    amount,
    priceUsd,
    amountUsd: amount * priceUsd
  }
}

module.exports = { mapAssetInfo }
