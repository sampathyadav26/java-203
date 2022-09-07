import { collection, addDoc } from "firebase/firestore";

import React, { useState } from "react";

import { db } from "../firebase";
//import List from "./List";

function Create() {
  const [age, setage] = useState();

  const [name, setname] = useState();

  const [salary, setsalary] = useState();

  const boardsCollection = collection(db, "boards");
  const addProduct = (e) => {
    e.preventDefault();
    addDoc(boardsCollection, { age, name, salary });
    alert("Successfully Product added.....");
    // console.log(boardsCollection)
  };
  return (
    <div>
     <div className="card"><center><h1> CREATE PAGE</h1></center></div> 
      <div
        className="container border border-2 mt-5"
        style={{ height: "24rem" }}
      >
        <h3 className="mt-4">Create Student</h3>

        <div className="mb-3 text-start">
          <label htmlFor="formGroupExampleInput" className="form-label ">
            age
          </label>

          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={age}
            onChange={(e) => setage(e.target.value)}
            placeholder="Enter age"
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="formGroupExampleInput" className="form-label ">
            name
          </label>

          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            salary
          </label>

          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            value={salary}
            onChange={(e) => setsalary(e.target.value)}
            placeholder="Enter salary"
          />

          <button
            
            className="btn btn-primary mt-4"
            onClick={addProduct}
          >
            Create
          </button>
        </div>
      </div>
    
    </div>
  );
}

export default Create;
