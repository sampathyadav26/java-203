import React, { useState } from 'react'

function Register() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  let arr = [{}];
  let signup = () => {
    var name = document.getElementById("exampleInputUserName");
    arr.push(name);
    var password = document.getElementById("exampleInputUserName");
    arr.push(password);
    var age = document.getElementById("exampleInputage");
    arr.push(age);
    var mobileNumber = document.getElementById("exampleInputMobile");
    arr.push(mobileNumber);
   console.log(arr);

  };
  const handleUserName = (e) => {
    setName(e.target.value);



  };
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUserage = (e) => {
    setAge(e.target.value);
  };
  const handleUsermobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };

   
  

  return (
    <div className="container">

      <h1>Login Application</h1>
      <form>

        <div className="mb-3">
          <label className="form-label" id="input">
            User Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUserName"
            onChange={handleUserName}
          />

        </div>
        <div className="mb-3">
          <label className="form-label" id="pass">
            Password :
          </label>
          <input
            type="Password"
            className="form-control"
            id="exampleInputPassword"
            onChange={handleUserPassword}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" id="age">
            age
          </label>
          <input
            type="age"
            className="form-control"
            id="exampleInputage"
            onChange={handleUserage}
          />

        </div>
        <div className="mb-3">
          <label className="form-label" id="input">
            mobileNumber
          </label>
          <input
            type="mobilenumber"
            className="form-control"
            id="exampleInputMobile"
            onChange={handleUsermobileNumber}
          />

        </div>
        <div className="card-footer d-flex justify-content-center">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary ms-1" onClick={signup}>Add</button>
        </div>

      </form>

      {name} {password} {age} {mobileNumber}

    </div>
  )
}

export default Register
