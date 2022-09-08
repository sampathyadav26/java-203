import React, { useState } from 'react'
import StudentService from '../services/StudentService';

function CreateStudent() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [course, setCourse] = useState();
  const [sal, setsal] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      "id": id,
      "name": name,
      "course": course,
      "sal": sal
    }
    StudentService.createStudent(obj).then(response => {
      alert("added")
    })
  }
  return (
    <div className='container'>
      <h1>create Student</h1>
      <hr />
      <form>
        <div class="mb-3">
          <label htmlFor="exampleInputId" class="form-label">Id</label>
          <input type="text" class="form-control" id="exampleInputId" onChange={(e) => setId(e.target.value)} />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputName" class="form-label">Name</label>

          <input type="text" class="form-control" id="exampleInputName" onChange={(e) => setName(e.target.value)} />

        </div>
        <div class="mb-3">

          <label htmlFor="exampleInputCourse" class="form-label">Course</label>

          <input type="text" class="form-control" id="exampleInputCourse" onChange={(e) => setCourse(e.target.value)} />

        </div>

        <div class="mb-3">
          <label htmlFor="exampleInputSal" class="form-label">Sal</label>
          <input type="number" class="form-control" id="exampleInputSal" onChange={(e) => setsal(e.target.value)} />
        </div>

        <button onClick={handleSubmit} class="btn btn-primary">Submit</button>

      </form>

    </div>



  )

}

export default CreateStudent
