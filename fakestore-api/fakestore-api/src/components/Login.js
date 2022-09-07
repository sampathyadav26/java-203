import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState();
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  let login =(e) => {
    e.preventDefault();
    if(name === password){
      console.log("hello")
      navigate("/fashionstore");
    }
    else{
      alert("wrong credentials");
    }
  }
  return (
    <div className='container'>
      <h1>Login</h1>
      <form className='changing-border'>
        <div className="mb-3">
          <label htmlFor="exampleInputUserName" className="form-label">User Name</label>
          <input type="text" className="form-control" id="exampleInputUserName" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">password</label>
          <input type="Password" className="form-control" id="exampleInputPassword" onChange={(e) => setpassword(e.target.value)} />
        </div>
        <button type="Login" className="btn btn-primary" onClick={login}>Login</button>
      </form>
      {name}  {password}
    </div>
  )
}

export default Login
