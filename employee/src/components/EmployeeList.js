import React, { useEffect, useState } from 'react'
import EmployeeServices from '../Service/EmployeeServices';
import { useNavigate } from "react-router-dom";

function EmployeeList() {
  let navigate = useNavigate();
  const [employee, setEmployee] = useState([])
  useEffect(() => {
    getEmployees();
  }, []);
  const getEmployees = async () => {
    const data = await EmployeeServices.getAllEmployee();
    console.log("Data :" + JSON.stringify(data));
    setEmployee(data.data)
    console.log("Employee List :" + employee)
  };
  const DeleteEmployee = async (id) => {

    alert("delete")
    
    await EmployeeServices.DeleteEmployee(id);
    
   getEmployees();
    
    }

  const UpdateEmployee = (id) => {
    navigate(`/update/${id}`);
  }
  return (
    <div className='container'>
      <h1>Employeee List</h1>
      <hr />
      <a className="btn btn-primary" style={{ float: "left" }}>+Employee</a>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Batch</th>
            <th scope="col">Salary</th>
            <th colSpan={"2"}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.batch}</td>
                <td>{employee.salary}</td>

                <td>
                  <a className="btn btn-primary" style={{ margin: "10px" }} onClick={() => UpdateEmployee(employee.id)}>Edit</a>
                  <button className="btn btn-danger" onClick={() => DeleteEmployee(employee.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList;

