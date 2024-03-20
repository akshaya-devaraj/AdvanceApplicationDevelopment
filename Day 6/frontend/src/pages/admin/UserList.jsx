import React from 'react'
import Sidebar from './Sidebar'
import Footer from '../../components/Footer'
import '../../assets/css/Order.css'
import Userlist from '../admin/Userlist.json'

function UserList() {
  return (
    <>
    <Sidebar/>
    <div className='reservelist'>
    <div className='containers'>
    <center><h2>User List</h2></center>
    <br/>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          </tr>
      </thead>
      <tbody>
        {Userlist.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default UserList