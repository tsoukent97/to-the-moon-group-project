import React from 'react'
import { connect } from 'react-redux'
import { setError } from '../actions'

const ErrorMessage = (props) => {
  const closeError = () => {
    props.dispatch(setError(''))
  }

  return (
    <div className='error'>
      {props.errorMessage === '' ? props.errorMessage : <div style={{ color: 'red' }}>{props.errorMessage}<button onClick={closeError}>X</button></div> }
    </div>
  )
}
function mapStateToProps (state) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps)(ErrorMessage)
