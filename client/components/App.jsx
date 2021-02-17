import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// import { fetchFruits } from '../actions'

import Balance from './Balance.jsx'

function App (props) {
  // useEffect(() => {
  //   props.dispatch(fetchFruits())
  // }, [])

  return (
    <>
      <div className='app'>
        <Balance />
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
