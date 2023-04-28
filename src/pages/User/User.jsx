import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import OAuth from '../OAuth/OAuth'

import './User.css'

function User() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) {
        navigate('/home')
      }
    } catch (error) {
      toast.error('Bad User Credentials')
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          className='emailInput'
          placeholder='Email'
          id='email'
          value={email}
          onChange={onChange}
        />

        <div className='passwordInputDiv'>
          <input
            type={'password'}
            className='passwordInput'
            placeholder='Password'
            id='password'
            value={password}
            onChange={onChange}
          />
        </div>

        <Link
          to='/forgot-password'
          className='forgotPasswordLink'
        >
          Forgot Password
        </Link>

        <div className='signInBar'>
          <p className='signInText'>Sign In</p>
          <input type='submit' />
        </div>
      </form>

      <OAuth />
    </div>
  )
}

export default User
