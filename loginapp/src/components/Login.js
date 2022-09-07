import React, { useState } from 'react'
import{useNavigate} from "react-router-dom";

function Login() {
  const [name, setName] = useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
  let login=(e)=>{
    e.preventDefault();
    if(name===password){
      
      navigate("/dashboard")
    }else{
      alert("invalid password")
    }
    
  }
  
  return (
    <div className="container">
      <h1>Login Application</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInpuUserName" class="form-label">User Name</label>
          <input type="text" class="form-control" id="exampleInputUserName" onChange={(e)=>setName(e.target.value)} />
          <label for="examplePassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputpassword" aria-describedby="emailHelp"onChange={(e)=>setPassword(e.target.value)} />
            
        </div>
  
        <button type="submit" class="btn btn-primary" onClick={login}>
          Login</button>
      </form>
      {name}{password}

    </div>
  )
}

export default Login
