import React from 'react'

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Chat App</span>
          <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign in</button>
            </form>
            <p>Don't have an account? Sign up</p>
        </div>
    </div>
  )
}

export default Login;