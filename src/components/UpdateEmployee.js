import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from "react-router-dom";
import EmployeeService from '../service/EmployeeService';

function UpdateEmployee() {
    const navigate=useNavigate();
    const [id, setid] = useState();
  const [name, setname] = useState();
  const [Salary, setSalary] = useState();
  const [Age, setAge] = useState();
  const params=useParams();
  
  useEffect(()=>{
    EmployeeService.getEmployee(params.id).then(res =>{
       setid(res.data.id);
       setname(res.data.name);
       setSalary(res.data.Salary);
       setAge(res.data.Age);
    });

  },[])
  const update=(e)=>{
    e.preventDefault();
    
    
    EmployeeService.updateemployee(id,{id,name,Salary,Age}).then(res =>{
        console.log(res.data)
    })
    navigate(`/list`);

  }
  return (
    <div>
     <form>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeId" className="form-label">Enter Employee Id</label>
          <input type="text" className="form-control" id="exampleInputEmployeeId" value={id} onChange={(e) => setid(e.target.value)} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeName" className="form-label">Enter Employee Name</label>
          <input type="text" className="form-control" id="exampleInputEmployeeName" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeSalary" className="form-label">Enter Employee Salary</label>
          <input type="text" className="form-control" id="exampleInputEmployeeSalary" value={Salary} onChange={(e) => { setSalary(e.target.value) }} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmployeeAge" className="form-label">Enter Employee Age</label>
          <input type="text" className="form-control" id="exampleInputEmployeeAge" value={Age} onChange={(e) => { setAge(e.target.value) }} />
        </div><br/>
        <button type="submit" className="btn btn-primary"  style={{marginRight:'1200px'}} onClick={(e)=>update(e)}>Update</button>
        {id}{name}{Salary}{Age}
      </form>
    </div>
  )
}

export default UpdateEmployee
