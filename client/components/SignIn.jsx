import React, { useState } from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../config'

function SignIn (props) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')

  function hideError () {
    setError('')
  }

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleClick (e) {
    e.preventDefault()
    const { username, password } = form
    signIn({ username, password }, { baseUrl })
      .then((result) => {
        console.log(result)
        // eslint-disable-next-line promise/always-return
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
      .catch(err => {
        if (err.message === 'INVALID_CREDENTIALS') {
          setError('Username and password combination not found')
        }
      })
  }

  return (
    <>
      <h1>Sign In</h1>
      <div onClick={hideError}>
        { error && `Error:${error}`}
      </div>
      <form data-testid='form'>
        <label htmlFor='username'>Username: </label>
        <input type='text'
          id='username'
          name='username'
          placeholder='enter your username'
          value={form.username}
          onChange={handleChange} />

        <label htmlFor='password'> Password: </label>
        <input type='password'
          id='password'
          name='password'
          placeholder='enter your password'
          value={form.password}
          onChange={handleChange} />

        <button data-testid='signin' onClick={handleClick}>Sign In</button>
      </form>
    </>
  )
}

export default SignIn
