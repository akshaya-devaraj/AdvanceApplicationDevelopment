import React from 'react'
import logo from '../assets/images/logo.jpg'
import { useNavigate } from 'react-router-dom'
import '../assets/css/Navbar.css'

function Navbar() {
  const nav=useNavigate();
  const about=()=>
  {
    nav("/about")
  }
  const contact=()=>
  {
    nav("/contact")
  }
  const login=()=>
  {
    nav("/login")
  }
  return (
     <div>
    <div className='navbar'>
    <div className='navbar-container'>
    
    <div>
    <ul id='navbar'>
    <img src={logo} className='logo1'/>
    <li><span style={{cursor:'pointer'}} onClick={contact}> Contact</span></li>
    <li><span style={{cursor:'pointer'}} onClick={login}> Login</span></li>
    <li><span style={{cursor:'pointer'}} onClick={about}> About</span></li>
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