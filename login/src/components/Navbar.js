import React from 'react'
import { BrowserRouter,Link, Routes, Route,} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'

function Navbar() {
    return (
        <div>
           
            <BrowserRouter>
               <ul>
                
                    <li>
                        
                    </li>
                    <li>
                        <Link to="/Login">Sign in</Link>
                    </li>
                    <li>
                        <Link to="/Register">Sign Up</Link>
                    </li>
                   
                </ul>
              

                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Navbar
