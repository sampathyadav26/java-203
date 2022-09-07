import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'

const NavBar = () => {
  return (
    <div>
      <BrowserRouter>
      <ul>
        <li><Link to="/login">SignIn</Link></li>
        <li><Link to="/register">SignUp</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavBar
