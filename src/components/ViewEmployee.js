import React, { useEffect,useState } from 'react'
import { useParams } from "react-router-dom";
import EmployeeService from '../service/EmployeeService'

function ViewEmployee() {
    const params=useParams();
    const [id, setid] = useState();
  const [name, setname] = useState();
  const [Salary, setSalary] = useState();
  const [Age, setAge] = useState();

    useEffect(()=>{
        EmployeeService.getEmployee(params.id).then(res=>{
            setid(res.data.id);
       setname(res.data.name);
       setSalary(res.data.Salary);
       setAge(res.data.Age);

        });
    },[])
  return (
    <div>
      <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee  ID: {id}</label>
                       
                        </div>
                        <div className = "row">
                            <label> Employee Name:{ name } </label>
                             
                        </div>
                        <div className = "row">
                            <label> Employee Salary: { Salary }</label>
                       
                        </div>
                        <div className = "row">
                            <label> Employee Age: { Age } </label>
                           
                        </div>
                    </div>

                </div>
   
    </div>
  )
}

export default ViewEmployee
