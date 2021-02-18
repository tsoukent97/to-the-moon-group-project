import React from 'react'
import { connect } from 'react-redux'
import OpenOrders from './OpenOrders'

// import { fetchFruits } from '../actions'

function App (props) {
  // useEffect(() => {
  //   props.dispatch(fetchFruits())
  // }, [])

  return (
    <>
      <div className='app'>
        {/* <Balance /> */}
        <OpenOrders />
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
