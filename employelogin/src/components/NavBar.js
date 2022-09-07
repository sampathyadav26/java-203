import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
function NavBar() {
  return (
    <div >
      <BrowserRouter>
        <ul>
          <li><Link to="/login">Signin</Link></li>
          <li><Link to="/Register">SignUp</Link></li>
        </ul>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashbord" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavBar
