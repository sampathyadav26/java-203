import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from 'react'

import Login from "./Login";
import FashionStore from "./FashionStore";
import Create from "./Create";
import AddToCart from "./AddToCart";
import Bought from "./Bought";

function Navbar() {
  return (
    <div className="App">

      <BrowserRouter>
        <ul>
          <li> <Link to="/login"> Login</Link> </li>
          <li> <Link to="/register"> Register</Link> </li>
           <li> <Link to="/fashionstore"> Mithra Store</Link> </li> 
        </ul>

        <Routes>
          <Route path="/fashionstore" element={<FashionStore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Create />} />
          <Route path="/addcart/:id" element={<AddToCart />} />
          <Route path="/bought/:id" element={<Bought />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
