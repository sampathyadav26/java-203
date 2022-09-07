import React, { useState } from "react";

const Register = () => {
  const [name, setname] = useState("");
  const [Age, setAge] = useState("");
  const [position, setposition] = useState("");
  const [salary, setsalary] = useState("");
 
  //     FullName: "",
  //     Age: "",
  //     position: "",
  //     salary: "",
  //   });
  //   const { FullName, Age, position, salary } = data;

  //   const changeHandler = (e) => {
  //     setdata({ data, [e.target.name]: [e.target.value] });
  //   };

  //   const changeHandlerAge = (e) => {
  //     setdata({ data, [e.target.Age]: [e.target.value] });
  //   };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(Age);
    console.log(position);
    console.log(salary);

    let arr = [];
    arr.push(name);
    arr.push(Age);
    arr.push(position);
    arr.push(salary);
    console.log(arr);
    const EmployeeList=arr.map(arr=>{
      return(
          
          <tr key={arr.id}>
              <td>{arr.id}</td>
              <td>{arr.name}</td>
              <td>{arr.position}</td>
          </tr>
          
      )
  })
    
  };



  return (
    <div>
      <center>
        <h1>Registration </h1>
        <form className="container" onSubmit={submitHandler}>
          <label>FullName</label>
          <input
            type="name"
            name="FullName"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Age</label>

          <input
            type="Age"
            name="Age"
            value={Age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>position</label>
          <input
            type="position"
            name="position"
            value={position}
            onChange={(e) => setposition(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>salary</label>
          <input
            type="salary"
            name="salary"
            value={salary}
            onChange={(e) => setsalary(e.target.value)}
          />
          <br></br>
          <br></br>
          <input type="submit" name="submit" />
          <br></br>
          <br></br>
        </form>

      </center>

    </div>
  );
};

export default Register;
