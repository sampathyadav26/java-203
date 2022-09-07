import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
function Login() {
     const [name,setName]=useState("");
     const[password,setPassword]=useState("");
     const navigate = useNavigate();
     let login = (e) => {
       e.preventDefault();
       if (name === password) {
         navigate("/dashboard");
       } else {
         alert("Invalid Username / Password.....");
       }
    };
  return (
    <div classNameName="container">
    <h1>Login Application</h1>
    <form>
      <div className="mb-3">
        <label for="exampleInputUserName" className="form-label">
          User Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputUserName"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassWord" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={login}>
        LogIn
      </button>
    </form>
    {name} {password}
  </div>

  )
}

export default Login
