import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";


function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
          <Link to="/register" >SignUp </Link>
          </li>
          <li>
          <Link to="/login">SignIn </Link>
           
          </li>
        </ul>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
