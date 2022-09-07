import React, { useEffect, useState } from "react";
import RegisterServices from "../../services/RegisterServices";
import { useNavigate } from "react-router-dom";
import SignInSignUp from "../navbar/SignInSignUp";
const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState([]);
  //==============================================================

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //==============================================================
  const navigate = useNavigate();
  //==============================================================
  useEffect(() => {
    RegisterServices.getAllCredentials().then((res) => {
      setUserCredentials(res.data);
    });
  }, []);
  //==============================================================

  const handleLogin = (e) => {
    e.preventDefault();
    // eslint-disable-next-line array-callback-return
    userCredentials.map((user) => {
      if (user.email === email && user.password === password) {
        navigate("/userProductsList");
      }
    });
  };
  return (
    <div>
      <SignInSignUp />
      <div className="login-style container">
        <center>
          <h1>User Login Form</h1>
        </center>
        <hr />
        <form className="form-margin-style">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
          <p>
            If you are <q>admin</q> please click on this link{" "}
            <a href="/adminLogin">Admin Login Form</a>.
          </p>
          <p>
            If you don't have any account please Sign Up{" "}
            <a href="/signUp">Sign Up</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
