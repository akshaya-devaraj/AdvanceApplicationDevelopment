import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/user/Navbar'
import Home from './public/Home'
import About from './public/About'




function userRoutes() {}
function adminRoutes() {}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <About/>
    
    </>
  )
}

export default App
