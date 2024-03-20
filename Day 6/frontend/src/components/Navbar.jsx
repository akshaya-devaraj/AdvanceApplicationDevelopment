import React from 'react'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import '../assets/css/Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../Redux/UserSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Navbar() {
  const nav=useNavigate();
  const dispatch=useDispatch();
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
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
  const cart=()=>
  {
    nav("/cart")
  }
  const logouthandler=()=>
  {
    dispatch(logout())
    alert("Logout Successfully!")
    nav("/");
  }
  return (
     <div>
    <div className='navbar'>
    <div className='navbar-container'>
    
    <div>
    <ul id='navbar'>
    <img src={logo} className='logo1'/>
    <li><span style={{cursor:'pointer'}} onClick={contact}> Contact</span></li>
    {username === 'Guest' && (
      <li><span style={{ cursor: 'pointer' }} onClick={login}>Login</span></li>
    )}
    <li><span style={{cursor:'pointer'}} onClick={about}> About</span></li>
    {username !== 'Guest' && (
      <li><span style={{ cursor: 'pointer' }} onClick={logouthandler}>Logout</span></li>
    )}
    <li>
    <span style={{cursor:'pointer'}}>{username}</span>
    </li>
    <li onClick={cart}><ShoppingCartIcon/></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar