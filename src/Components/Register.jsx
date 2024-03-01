import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">HyperChat</span>
      <span className="title">Register</span>
      <form >
        <input type="text" placeholder="Display name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input style={{display:'none'}}type="file" id='title'/>
        <label htmlFor="title">
            <img src={Add} alt="addAvatar image" />
            <span>Add a Avatar</span>
        </label>
        <button>Sign Up</button>
      </form>
      <p>You do have an account ? Login</p>
    </div>
 </div>
  )
}

export default Register
