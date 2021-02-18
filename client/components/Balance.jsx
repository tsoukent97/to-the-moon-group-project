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

  // console.log(balances)

  return (
    <div className='balances'>
      <h1>Wallet Balance</h1>
      <table>
        <thead>
          <tr>
            <td data-testid='testData'>Token</td>
            <td data-testid='testData'>Amount</td>
            <td data-testid='testData'>USD Price</td>
            <td data-testid='testData'>USD Value</td>
          </tr>
        </thead>
        <tbody>
          {balances.map(balance => (
            <tr key={balance.token}>
              <td>{balance.token}</td>
              <td>{balance.amount}</td>
              <td>{balance.usdPrice}</td>
              <td>{balance.usdValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Balance
