import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginForm from '../user-login-portal/UserLoginForm';
import RegisterForm from '../user-login-portal/UserRegisterForm';


const SignInSignUp = () => {
  return (
    <div>
       <BrowserRouter>
        <ul>
          <li>
            <Link to="/signIn">Sign In</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
        </ul>
        <Routes>
        <Route path='/' element={<LoginForm />} />
         <Route path='/signIn' element={<LoginForm />} />
         <Route path='/signUp' element={<RegisterForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default SignInSignUp
