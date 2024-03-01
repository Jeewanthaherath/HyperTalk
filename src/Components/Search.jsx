import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a Chat' />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/15853787/pexels-photo-15853787/free-photo-of-man-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <div className="userChatInfo">
          <span>Hashini</span>
        </div>
      </div>
  
    </div>
  )
}

export default Search
