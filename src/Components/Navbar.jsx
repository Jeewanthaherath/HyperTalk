import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>HyperText</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/15853787/pexels-photo-15853787/free-photo-of-man-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <span>Jeewantha</span>
        <button>Log out</button>
      </div>
      
    </div>
  )
}

export default Navbar
