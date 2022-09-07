import React from 'react'
import Register, { useState } from 'react'
import {useNavigate} from "react-router-dom";
function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const navigate=useNavigate();
  let login = (e) => {
    e.preventDefault();
    if (name === password) {
      navigate("/dashbord");
      alert("Successfully Loggedin.....");
    } else {
      alert("Invalid User/ Password......");
    }
  }
  return (
    <div className="container">
      <h1>Login Application</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputUserName" class="form-label">
            UserName
          </label>
          <input type="text" class="form-control" id="exampleInputUserName" onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword" class="form-label">
            Password
          </label>
          <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={login}>
          Login
        </button>
      </form>
      {name} {password}
    </div>
  )
}

export default Login

