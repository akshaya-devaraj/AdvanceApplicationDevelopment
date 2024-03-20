import React from 'react'
import Sidebar from './Sidebar'
import Footer from '../../components/Footer'
import '../../assets/css/Order.css'
import Reservedlist from '../admin/Reservedlist.json'
function Order() {
  return (
    <>
    <Sidebar/>
    <div className='reservelist'>
    <div className='containers'>
    <center><h2>Order List</h2></center>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Bill</th>
          <th>Status</th>
          </tr>
      </thead>
      <tbody>
        {Reservedlist.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.bill}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Order