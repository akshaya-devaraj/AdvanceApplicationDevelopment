// AdminDashboard.jsx
import React from 'react';

import Footer from '../../components/Footer';
import '../../assets/css/AdminDash.css';
import Sidebar from './Sidebar';

function AdminDash() {
  return (
    <>
    <Sidebar />
      <div className="admin-dashboard">
        <div className="main-content">
          <h1>Welcome to Admin Home Page</h1>
          <p>This is where you can manage your website.</p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminDash;
