import { useState } from 'react'
import './App.css'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './public/Home'
import About from './public/About'
import Carousel from './components/Carousel'
import Contact from './public/Contact'
import Footer from './components/Footer'
import Sidebar from './pages/admin/Sidebar'
import Personalized from './pages/user/Personalized'
import getPersonalizedById from './pages/user/getPersonalizedById'
import PersonalizedDetails from './pages/user/PersonalizedDetails'
import AdminHome from './pages/admin/AdminHome'
import Billing from './pages/user/Billing'
import CartPage from './pages/user/CartPage'
import Cake from './pages/user/Cake'
import CakeDetails from './pages/user/CakeDetails'
import AdminDash from './pages/admin/AdminDash'
import Order from './pages/admin/Order'
import UserList from './pages/admin/UserList'
function userRoutes() {
}
function adminRoutes() {}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/navbar" element={<Navbar/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/carousel" element={<Carousel/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/footer" element={<Footer/>}/>
    <Route path="/personalized" element={<Personalized/>}/>
    <Route path="/personalized/:id" element={<PersonalizedDetails />} />
    <Route path="/cake" element={<Cake/>}/>
    <Route path="/cake/:id" element={<CakeDetails />} />
    <Route path="/adminhome" element={<AdminHome/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/billing" element={<Billing/>}/>
    <Route path="/admindash" element={<AdminDash/>}/>
    <Route path="/order" element={<Order/>}/>
    <Route path="/userlist" element={<UserList/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
