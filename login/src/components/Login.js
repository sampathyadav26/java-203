import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="container">
      <div class="card-body border border-1-primary  mt-5"  style={{width:"85rem"}}>
        <h1>Login Application</h1>
        <form>
          <div class="mb-3">
            <label for="exampleInputUserName" class="form-label" id="input">
              User Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputUserName"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassWord" class="form-label" id="pass">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={login}>
            LogIn
          </button>
        </form>
      </div>
      {name} {password}
    </div>
  );
}

export default Login;
