import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';

function CreateEmployee() {
  const [id,setid]=useState();
  const [name,setname]=useState();
  const [tech,settech]=useState();

  const handleSubmit=(e)=>{
    e.preventDefault();
    let obj={
      "id":parseInt(id),
      "name":name,
      "tech":tech
    }
    EmployeeService.createEmployee(obj).then(res=>{
      alert("Employee created");
      //console.log(res.data);
    })
  }

  return (
    <div>
      <h1>Add Employee</h1>
      <form className='container'>
        <div className="mb-3" >
            <label className="form-label">ID</label>
            <input  name="id"className="form-control" onChange={(e)=>setid(e.target.value)} value={id}></input>
        </div>
        <div className="mb-3">
            <label className="form-label">name</label>
            <input  name="name" className="form-control" onChange={(e)=>setname(e.target.value)} value={name}></input>
        </div>
        <div className="mb-3">
            <label className="form-label">tech</label>
            <input name="tech" className="form-control" onChange={(e)=>settech(e.target.value)} value={tech}></input>
        </div>
  
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Create</button>
</form>
    </div>
  )
}

export default CreateEmployee
