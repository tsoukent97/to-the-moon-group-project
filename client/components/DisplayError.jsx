import React from 'react'
import { connect } from 'react-redux'
import { closeErrorMessage } from '../actions'
import { getBalance } from '../apis/index'

const ErrorMessage = (props, { dispatch }) => {
  const closeError = () => {
    getBalance()
      .then(() => {
        dispatch(closeErrorMessage('')
        )
        return null
      })
      .catch(e => {
        console.log('this doesnt work')
      })
  }

  return (
    <div className='error'>
      {props.errorMessage === '' ? props.errorMessage : <div>{props.errorMessage}<button onClick={closeError}>X</button></div> }
    </div>
  )
}
function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps)(ErrorMessage)
