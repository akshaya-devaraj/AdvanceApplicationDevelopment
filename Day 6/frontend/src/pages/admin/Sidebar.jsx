import React from 'react'
import { Button } from '@mui/material'
import '../../assets/css/Sidebar.css';
import { blue } from '@mui/material/colors';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {
  const nav=useNavigate();
  const dash=()=>{
    nav("/adminhome")
  }
  const order=()=>{
    nav("/order")
  }
  const userlist=()=>{
    nav("/userlist")
  }
  return (
    <>
    <div className='left-bar'>
    <div className='left-bar-container'>
    <Button className='left-bar-btn' > <HomeIcon sx={{color:blue[900]}} fontSize='large'/></Button>
   <div className='dashboard'>Category</div>
    <Button className='left-bar-btn' onClick={dash}> <SpaceDashboardIcon sx={{color:blue[900]}} fontSize='large'/></Button>
   <div className='dashboard'>Dashboard</div>
   
    <Button className='left-bar-btn'onClick={order}> <ContactSupportIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='contact' >Order</div>
    <Button className='left-bar-btn'onClick={userlist}><InfoIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='about' >User List</div>
    <Button className='left-bar-btn'><LogoutIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='logout'>Logout</div>
    </div>
    </div>
    </>
  )
}

export default Sidebar