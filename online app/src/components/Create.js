import React, { useState } from 'react'
import FashionService from '../fashionservices/FashionService';


function Create() {

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [company, setcompany] = useState();

  let newArr = {
      id: parseInt(id),
      name: name,
      company: company,
  };

  const [plist, setPlist] = useState(newArr);

  function AddStudents() {
      alert("add");
      createstd();
  }

  const createstd = async () => {
    FashionService.createProduct(newArr).then((res)=>{
          console.log("Student list is:" + JSON.stringify(res.data));
       })
  }

    return (
      <div className='container'>
          <h2>CreateStudent</h2>
          <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">Enter Id:</label>
              <input type="text" className="form-control" id="formGroupExampleInput" value={id} placeholder="Enter your Id" onChange={(e) => setId(e.target.value)} />
          </div>

          <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Enter Name:</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" value={name} placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />          </div>
          <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Enter Company:</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" value={company} placeholder="Enter your Company" onChange={(e) => setcompany(e.target.value)}/>
          </div>
          <div className="mb-3">
              <button className='btn btn-primary' onClick={AddStudents}>Add</button>
          </div>
      </div>
  )
}

export default Create



