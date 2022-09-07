import React from "react";
import "./App.css";
import CreateUser from "./components/CreateUser";
import LoginUser from "./components/LoginUser";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/create"> CreateUser</Link>
          </li>
          <li>
            <Link to="/login"> LoginUser</Link>
          </li>
          <li>
            <Link to="/List"> List</Link>
          </li>
        </ul>

        <Routes>
          <Route path="create" element={<CreateUser />} />
          <Route path="login" element={<LoginUser />} />
          <Route path="List" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
