import React, { useState, useEffect } from 'react'

import { getBalance } from '../apis'

function Balance () {

  const [balances, setBalances] = useState([])

  useEffect(() => {
    return getBalance()
      .then((data => {
        setBalances(data)
      }))
  }, [])

  // console.log(balances)

  return (
    <div className='balances'>
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