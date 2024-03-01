import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import Chats from '../Components/Chats'
import Input from '../Components/Input'
import Message from '../Components/Message'
import Search from '../Components/Search'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='Home'>
      <div className="container">
        <Sidebar />
        <Chat />    
      </div>
    </div>
  )
}

export default Home
