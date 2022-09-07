import React from "react";
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
              HkCollections
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active me-2" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-2 " aria-current="page" href="Products">
                  Products
                </a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link active me-2" aria-current="page" href="About">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-2" aria-current="page" href="#">
                  Contacts
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-dark">
                <i className="fa fa-login me-2"></i> Login
              </a>
              <a href="" className="btn btn-outline-dark">
                <i className="fa fa-login me-2"></i>Register
              </a>
              <a href="" className="btn btn-outline-dark">
              <i className="fa fa-login me-2"></i>Cart(0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default Navbar;
