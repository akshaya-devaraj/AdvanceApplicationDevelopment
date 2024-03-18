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
  return (
    <>
    <div className='left-bar'>
    <div className='left-bar-container'>
    <Button className='left-bar-btn' > <HomeIcon sx={{color:blue[900]}} fontSize='large'/></Button>
   <div className='dashboard'>Profile</div>
    <Button className='left-bar-btn'> <SpaceDashboardIcon sx={{color:blue[900]}} fontSize='large'/></Button>
   <div className='dashboard'>Dashboard</div>
   
    <Button className='left-bar-btn'> <ContactSupportIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='contact'>ContactUs</div>
    <Button className='left-bar-btn'><InfoIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='about'>About</div>
    <Button className='left-bar-btn'><LogoutIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='logout'>Logout</div>
    </div>
    </div>
    </>
  )
}

export default Sidebar