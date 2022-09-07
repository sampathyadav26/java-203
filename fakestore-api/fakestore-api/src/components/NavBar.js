import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from 'react'

import Login from "./Login";
 import FashionStore from "./FashionStore";
import Register from "./Register";

function Navbar() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <ul>
      <li> <Link to="/login"> Login</Link> </li>
      <li> <Link to="/register"> Register</Link> </li>
      {/* <li> <Link to="/fashionstore"> FashionStore</Link> </li> */}
     </ul>
     
     <Routes>
      <Route path="/" element={<FashionStore />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default Navbar
