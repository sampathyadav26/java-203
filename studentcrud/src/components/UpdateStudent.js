import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import StudentService from '../services/StudentService';

function UpdateStudent() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [course, setCourse] = useState();
  const [sal, setsal] = useState();
  const params = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    
    StudentService.getStudent(params.id).then(res => {
      setId(res.data.id);
      setName(res.data.name);
      setCourse(res.data.course);
      setsal(res.data.sal);
      console.log(res.data.id+" "+res.data.name+" "+res.data.course);
    })
  }, []);

  const update = (e)=>{
    e.preventDefault();
    StudentService.updateStudent(id,{id,name,course,sal}).then(res=>{
      console.log(res.data);
    })
    navigate("/list");
  }
  const handleSubmit=()=>{

  }
  return (
    <div>
      <h1>Update Student</h1>
      <hr />
      <div className="container">
      <form>
        <div class="mb-3">
          <label htmlFor="exampleInputId" class="form-label">Id</label>
          <input type="text" class="form-control" id="exampleInputId" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputName" class="form-label">Name</label>

          <input type="text" class="form-control" id="exampleInputName" value={name} onChange={(e) => setName(e.target.value)} />

        </div>
        <div class="mb-3">

          <label htmlFor="exampleInputCourse" class="form-label">Course</label>

          <input type="text" class="form-control" id="exampleInputCourse" value={course} onChange={(e) => setCourse(e.target.value)} />
          
        </div> 

        <div class="mb-3">
          <label htmlFor="exampleInputSal" class="form-label">Sal</label>
          <input type="number" class="form-control" id="exampleInputSal" value={sal} onChange={(e) => setsal(e.target.value)} />
        </div>

        {/* <button onClick={handleSubmit} class="btn btn-primary"   style={{margin:"10px"}}>Submit</button> */}
        <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => update(e)}
            >
            Update
          </button>
          {id}{name}{course}{sal}
      </form>
    </div>
    </div>
  )
}

export default UpdateStudent
