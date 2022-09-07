import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Create from "./componets/Create";
import List from "./componets/List";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <div>
        {/* <Navbar /> */}
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
           
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Home
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link to="/create"> Create List</Link>
                    </li>
                    <li>
                      <Link to="/list">List</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
