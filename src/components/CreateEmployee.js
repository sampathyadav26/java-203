import React, { useState } from 'react'
import EmployeeService from '../service/EmployeeService';

function CreateEmployee() {
    const [id, setid] = useState();
  const [name, setname] = useState();
  const [Salary, setSalary] = useState();
  const [Age, setAge] = useState();
  const createemploye=(e)=>{
    let obj={
        "id":parseInt(id),
        "name":name,
        "Salary":parseInt(Salary),
        "Age":parseInt(Age)
    }
    EmployeeService.createemploye(obj).then((res) => {
        

    })

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
        <button type="submit" className="btn btn-primary"  style={{marginRight:'1200px'}} onClick={createemploye}>Create</button>
      </form>
    </div>
  )
}

export default CreateEmployee
