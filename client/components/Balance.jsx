import React, { useState, useEffect } from 'react'

import { getBalance } from '../apis'

function Balance () {
  const [balances, setBalances] = useState([])

  useEffect(() => {
    return getBalance()
      .then(data => {
        setBalances(data)
        return null
      })
  }, [])

  const total = balances.reduce((total, balance) => (
    total + Number(balance.usdValue)
  ), 0)

  return (
    <div className='balances'>
      <h1>Wallet Balance</h1>
      You have {total.toFixed(2)} USD.
      <table>
        <thead>
          <tr>
            <td>Token</td>
            <td>Amount</td>
            <td>USD Price</td>
            <td>USD Value</td>
          </tr>
        </thead>
        <tbody>
          {balances.map(balance => (
            <tr key={balance.token}>
              <td>{balance.token}</td>
              <td>{balance.amount}</td>
              <td>{Number(balance.usdPrice).toFixed(2)}</td>
              <td>{Number(balance.usdValue).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Balance
