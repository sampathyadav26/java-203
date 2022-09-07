import React, { useState } from "react";
import RegisterServices from "../../services/RegisterServices";
import SignInSignUp from "../navbar/SignInSignUp";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = (e) => {
    e.preventDefault();
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(obj);
    RegisterServices.addUserCredentials(obj).then((res) => {
      console.log(obj);
    });
  };
  return (
    <div>
      <SignInSignUp />
      <div className="container">
        <center>
          {" "}
          <h1>Registration Form</h1>
        </center>
        <hr />
        <form action="/action_page.php">
          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            id="firstName"
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            id="lastName"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <hr />
          {/* <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p> */}

          <button onClick={handleRegister} className="registerbtn">
            Register
          </button>

          <div className="container signIn">
            <p>
              Already have an account? <a href="/signIn">Login</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
