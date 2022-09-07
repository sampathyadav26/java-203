import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
//import UpdateEmployee from './UpdateEmployee';
function EmployeeList() {
  const [Employee, setEmployee] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    getallstudents();
  }, []);

  function getallstudents() {
    const result = EmployeeService.getAllEmpolyees().then((res) => {
      //console.log("emp list:"+result.data);
      setEmployee(res.data);
      //console.log("emp data" + Employee);
    });
  }
  const CreateEmployee = () => {
    navigate("/create");
  };
  const UpdateEmployee = (id) => { 
    //alert("id==>"+id);
    navigate(`/update/${id}`);
  };
  const deleteEmployee=(id)=>{
   alert("delete")
   EmployeeService.deleteEmployees(id)
   .then(res=>{EmployeeService.getAllEmpolyees();})

  }
  return (
    <div className="container">
      <h1>Employee List</h1>
      <button
        className="btn btn-primary"
        style={{ margin: "10px" }}
        onClick={CreateEmployee}
      >
        +Employee
      </button>
      <table className="table table-bordered border-primary">
        <thead className="table-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">Tech</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Employee.map((Employe) => {
            return (
              <tr key={Employee.id}>
                <td>{Employe.id}</td>
                <td>{Employe.name}</td>
                <td>{Employe.tech}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{ margin: "10px" }}
                    onClick={()=>UpdateEmployee(Employe.id)}
                  >
                   
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={()=>deleteEmployee(Employe.id)} >Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
