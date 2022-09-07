import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
//import Navbar from './Navbar';
function Login() {
    const[name,setname]=useState();
    const[password,setpassword]=useState();
    const navigate=useNavigate();
    let Login=(e)=>{
       e.preventDefault();
       if(name===password){
      navigate("/dashboard");
      

       }else{
        alert("inavalid credentials");
       }
    }
  return (
    <div>
      <h1>Login Page</h1>
      <hr></hr>
    
      <form className='container'>
  <div class="form-group">
    <label for="exampleInputEmail1">User Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1"  placeholder="Enter email" onChange={(e)=> setname(e.target.value)}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=> setpassword(e.target.value)}/>
  </div>
  <hr></hr>
  <button type="submit" class="btn btn-primary" onClick={Login}>Login</button>
</form>
{name}{password}
    </div>
  )
}

export default Login;
