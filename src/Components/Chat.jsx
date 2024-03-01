import React from 'react'
import Add from '../img/add.jpeg'
import Cam from '../img/cam2.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'



function Chat() {
  return (
    <div className='chat '>
      <div className="chatInfo">
        <span>Hashini</span>
        <div className="chatImages">
          <img src={Add} alt="" />
          <img src={Cam}  alt="" />
          <img src={More}  alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
