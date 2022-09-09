import React, { useState } from "react";
import EmployeeServices from "../Service/EmployeeServices";
import { useNavigate } from "react-router-dom";

function CreateEmployee() {                   

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [batch, setBatch] = useState();
  const [salary, setSalary] = useState();


  let navigate = useNavigate();

  const CreateEmployee = (e) => {
    alert("create")
    e.preventDefault();
    let obj = {
      id: parseInt(id),
      name: name,
      batch: parseInt(batch),
      salary: parseFloat(salary)

    };
    console.log("EmployeeObject ===>" + JSON.stringify(obj));
    EmployeeServices.CreateEmployee(obj).then((res) => {
      console.log(res.data);
    });
    navigate("/list");
  };
  return (
    <div className="container">
      <h1>Create Employee</h1>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputId" className="form-label">
            Employee Id
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputId"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Employee Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputbatch" className="form-label">
            Employee Batch
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputbatch"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />

          <div className="mb-3">
            <label htmlFor="exampleInputSalary" className="form-label">
              Employee Salary
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputSalary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={CreateEmployee}
        >
          Create
        </button>
      </form>
    </div>
  );
}
export default CreateEmployee;
