import React, { useState } from 'react'

const SignUp = () => {
  const [accountState, setAccountState] = useState({
    newUsername: '',
    newPassword: '',
    realName: '',
    username: '',
    password: ''
  })

  accountState.handleInputChange = event => {
    setAccountState({ ...accountState, [event.target.name]: event.target.value})
  }

  accountState.handleSignUp = event => {
    event.preventDefault()
    console.log(accountState.newUsername, accountState.newPassword, accountState.realName)
  }

  accountState.handleLogIn = event => {
    event.preventDefault()
    console.log(accountState.username, accountState.password)
  }

  return (
    <>
    <h1>Create Account</h1>
    <form action='input'>
      <p>
        <label htmlFor='newUsername'>username:</label>
        <input
          type='text'
          name='newUsername'
          value={accountState.newUsername}
          onChange={accountState.handleInputChange}
        />
      </p>
      <p>
        <label htmlFor='realName'>Real Name:</label>
        <input
          type='text'
          name='realName'
          value={accountState.realName}
          onChange={accountState.handleInputChange}
        />
      </p>
      <p>
        <label htmlFor='newPassword'>Password:</label>
        <input
          type='password'
          name='newPassword'
          value={accountState.newPassword}
          onChange={accountState.handleInputChange}
        />
      </p>
      <p>
        <button onClick={accountState.handleSignUp}>SIGN UP!</button>
      </p>
    </form>

    <h1>Log Into Existing Account</h1>
    <form action='input'>
      <p>
        <label htmlFor='username'>username:</label>
        <input
          type='text'
          name='username'
          value={accountState.username}
          onChange={accountState.handleInputChange}
        />
      </p>
      <p>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          value={accountState.password}
          onChange={accountState.handleInputChange}
        />
      </p>
      <p>
        <button onClick={accountState.handleLogIn}>LOG IN!</button>
      </p>
    </form>
    </>
  )
}

export default SignUp
