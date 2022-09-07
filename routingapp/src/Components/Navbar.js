import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
const Navbar = () => {
    return (
        <div>    
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/service">Service</Link>
                    </li>
                    <li>
                        <Link to="/about">AboutUs</Link>
                    </li>
                    <li>
                        <Link to="/contact">ContactUs</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </BrowserRouter>
           
        </div>
    )
}

export default Navbar
