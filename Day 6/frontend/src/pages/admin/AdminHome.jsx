// AdminHome.jsx
import React from 'react';
import Footer from '../../components/Footer';
import '../../assets/css/AdminHome.css';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/UserSlice';
import { useNavigate } from 'react-router-dom';

function AdminHome() {
 
  return (
    <>
      <Sidebar/>
      <div className="admin-container">
        <h1>Welcome to Admin Panel</h1>
        <div className="admin-options">
          <div className="admin-option">
            <h2>Total Employee</h2>
            <h1>20</h1>
          </div>
          <div className="admin-option">
            <h2>Orders Received</h2>
            <h1>100</h1>
          </div>
          <div className="admin-option">
            <h2>Orders dispatched</h2>
            <h1>50</h1>
          </div>
          <div className="admin-option">
            <h2>Total Earnings</h2>
            <h1>20000</h1>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </>
  );
}

export default AdminHome;
