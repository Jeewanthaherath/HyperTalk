import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>HyperTalk</span>
            <span className='title'>Login</span>
            <form>
            <input type='email' placeholder='email'></input>
            <input type = 'password' placeholder='password'></input>
            <button>Sign In</button>
        </form>
        <p>You don't have Account? Register</p>
      
        </div>
     
    </div>
  )
}

export default Login
