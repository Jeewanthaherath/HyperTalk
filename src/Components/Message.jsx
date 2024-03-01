import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
      <img src="https://images.pexels.com/photos/15853787/pexels-photo-15853787/free-photo-of-man-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
      <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/15853787/pexels-photo-15853787/free-photo-of-man-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
      </div>
    </div>
  )
}

export default Message
