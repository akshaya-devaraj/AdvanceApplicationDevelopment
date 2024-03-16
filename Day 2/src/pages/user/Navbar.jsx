import React from 'react'
import '../../assets/css/Navbar.css'
import logo from '../../assets/images/logo.jpg'

function Navbar() {
  return (
     <div>
    <div className='navbar'>
    <div className='navbar-container'>
    
    <div>
    <ul id='navbar'>
    <img src={logo} className='logo1'/>
    <li><span style={{cursor:'pointer'}}> Contact</span></li>
    <li><span style={{cursor:'pointer'}}> Home</span></li>
    <li>
    <span style={{cursor:'pointer'}}> Welcome</span>
    </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar