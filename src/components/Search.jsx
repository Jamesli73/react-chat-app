import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/9771502/pexels-photo-9771502.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>Ely</span>
        </div>
      </div>
    </div>
  )
}

export default Search
