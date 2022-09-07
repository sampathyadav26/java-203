import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminServices from "../../services/AdminServices";
import SignInSignUp from "../navbar/SignInSignUp"
const AdminLoginForm = () => {
    const [adminCredentials, setAdminCredentials] = useState([]);
    //==============================================================
  
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    //==============================================================
    const navigate = useNavigate();
    //==============================================================
    useEffect(() => {
      AdminServices.getAllAdmins().then((res) => {
        setAdminCredentials(res.data);
      });
    }, []);
    //==============================================================
  
    const handleLogin = (e) => {
      e.preventDefault();
      // eslint-disable-next-line array-callback-return
      adminCredentials.map((user) => {
        if (user.email === email && user.password === password) {
          navigate("/adminList");
        }
      });
    }; 
  return (
    <div>
      <SignInSignUp />
      <center>
        <h1>Admin Login Form</h1>
      </center>
      <hr />
      <form className="container">
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
          If you are <q>user</q> please click on this link{" "}
          <a href="/signIn">User Login Form</a>.
        </p>
      </form>
    </div>
  );
};

export default AdminLoginForm;
