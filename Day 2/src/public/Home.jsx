import React from 'react'
import dummy from '../components/dummy.json'
import logo from '../assets/images/logo.jpg'
import Navbar from '../pages/user/Navbar'
function Home() {
  return (
    <div>
    <Navbar/>
    {dummy.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <img src={logo} className='logo'/>
        <td>{item['Product-Type']}</td>
        <td>{item['Product-Name']}</td>
        <td>{item.Rating}</td>
        <td>{item['Company-Name']}</td>
      </tr>
    ))}
    </div>
  )
}

export default Home