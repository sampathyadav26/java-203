import React from 'react'
import {useState}from "react";
import{useNavigate} from "react-router-dom";
function Login() {
    const[name,setName]=useState("");
    const[empId,setempId]=useState("");
    const[role,setRole]=useState("");
    const[salary,setSalary]=useState("");
    const navigate=useNavigate();
    let login=(e)=>{
        e.preventDefault();
        if(name===empId){
            navigate("/dashboard");
        }else{
            alert("invalid username");
        }
    };

  return (
    <div className='container'>
        <h1>Login Form</h1>
        <form>
  <div class="mb-3">
    <label for="exampleInputname" class="form-label">name</label>
    <input type="email" class="form-control" id="exampleInputName" onChange={(e) => setName(e.target.value)}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputempId" class="form-label">empID</label>
    <input type="empId" class="form-control" id="exampleInputempId" onChange={(e) => setempId(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputRole" class="form-label">Role</label>
    <input type="role" class="form-control" id="exampleInputrole" onChange={(e) => setRole(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputSalary" class="form-label">Salary</label>
    <input type="salary" class="form-control" id="exampleInputrole" onChange={(e) => setSalary(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={login}>
          LogIn
        </button>
      </form>
      {name} 
      
    </div>
  )
}

export default Login;
