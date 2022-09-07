import React from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import AdminLoginForm from "../admin-login-portal/AdminLoginForm";
import LoginForm from "../user-login-portal/UserLoginForm";
import RegisterForm from "../user-login-portal/UserRegisterForm";
import UserViewCart from "../user/UserViewCart";
import ProductList from "../user/ProductList";
import AdminProductList from "../admin/AdminProductList";
import CreateProduct from "../admin/CreateProduct";
import UpdateProduct from "../admin/UpdateProduct";
import ViewProduct from "../admin/ViewProduct";
import BuyItem from "../user/BuyItem";

const NavBar = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* =====================Log In============================== */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/signIn" element={<LoginForm />} />
          <Route path="/signUp" element={<RegisterForm />} />
          <Route path="/adminLogin" element={<AdminLoginForm />} />
          {/* =====================User============================== */}
          <Route path="/userViewCart" element={<UserViewCart />} />
          <Route path="/userProductsList" element={<ProductList />} />
          <Route path="/buyItem" element={<BuyItem />} />

          {/* =====================admin============================== */}
          <Route path="/adminList" element={<AdminProductList />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/view/:id" element={<ViewProduct />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
