import React, { useState } from 'react'
import './SignUp.css'

const SignUp = () => {
  const [accountState, setAccountState] = useState({
    newUsername: '',
    newPassword: '',
    realName: '',
    username: '',
    password: ''
  })

  accountState.handleInputChange = event => {
    setAccountState({ ...accountState, [event.target.name]: event.target.value })
  }

  accountState.handleSignUp = event => {
    event.preventDefault()
    console.log(accountState.newUsername, accountState.newPassword, accountState.realName)
    console.log('SIGN UP!')
  }

  accountState.handleLogIn = event => {
    event.preventDefault()
    console.log(accountState.username, accountState.password)
    console.log('LOG IN!')
  }

  return (
    <div className='parent'>
      {/* <div>
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
      </div>

      <div>
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
      </div> */}
      <div className='logoBox'>
        <p className='logoText logoBackground'>P</p><p className='logoText'>IAZZA</p>
        <p className='logoSubText'>Q&A for students</p>
      </div>
      <div className='btnBox'>
        <button className='signUpBtn loginFont authBtn' onClick={accountState.handleSignUp}>Get Started</button>
        <button className='loginBtn loginFont authBtn' onClick={accountState.handleLogIn}>Log in</button>
      </div>
    </div>
  )
}

export default SignUp
