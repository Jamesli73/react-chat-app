import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/9771502/pexels-photo-9771502.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
        <span>James</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar