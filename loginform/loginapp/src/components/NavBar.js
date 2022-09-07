import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Registration  from './Registration'
function NavBar() {
  return (
    <div >
      <BrowserRouter>
        <ul>
          <li><Link to="/login">Signin</Link></li>
          <li><Link to="/Registration">SignUp</Link></li>
        </ul>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/dashbord" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavBar
