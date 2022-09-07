import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "../user/ProductList";
import CartView from "../user/CartView";
import LoginForm from "../user-login-portal/UserLoginForm";
import RegisterForm from "../user-login-portal/UserRegisterForm";
import CreateProduct from "../admin/CreateProduct";
import UpdateProduct from "../admin/UpdateProduct";
import ViewProduct from "../admin/ViewProduct";
import AdminProductList from "../admin/AdminProductList";
import AdminLoginForm from "../admin-login-portal/AdminLoginForm";
const NavBar = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/viewCart">View Cart</Link>
          </li>
          <li>
            <Link to="/adminlist">Admin List</Link>
          </li>
          <li>
            <Link to="/view">View Product</Link>
          </li>
          <li>
            <Link to="/adminlogin">Admin Login</Link>
          </li>
        </ul> */}
        <ul>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
        <Routes>
          {/*============== Home ==================== */}
          <Route path="/" element={<LoginForm />} />
          {/*============== admin login portal ==================== */}
          <Route path="/adminlogin" element={<AdminLoginForm />} />
          {/*============== admin ==================== */}
          <Route path="/adminlist" element={<AdminProductList />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/view/:id" element={<ViewProduct />} />
          {/*============== login portal ==================== */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          {/*============== user ==================== */}
          <Route path="/viewCart" element={<CartView />} />
          <Route path="/list" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
