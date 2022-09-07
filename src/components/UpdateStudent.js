import React, { useEffect, useState } from 'react'
import{useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import StudentServices from '../services/StudentServices';
function UpdateStudent() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [course, setCourse] = useState();
  const params = useParams();
  let navigate=useNavigate();
  const [student, setStudent] = useState({ id: " ", name: " ", course: " " });
  useEffect(() => {
    StudentServices.getStudent(params.id).then((res) => {
    
      setId(res.data.id)
      setName(res.data.name)
      setCourse(res.data.course)
    })

  }, []);
  
   const update=()=>{
   
    StudentServices.updateStudent(id,{id,name,course})
  
navigate("/list");
   }

  return (
    <div className='container'>
      <div className='headingstyle'>
      <h1>UpdateStudent</h1>
      <hr />
      <form className="row g-3">
        <div className="row-md-3">
          <label htmfor="inputid" className="form-label">StudentId</label>
          <input type="text" className="form-control" id="inputid" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="row-md-3">
          <label htmfor="inputname" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div class="row-md-3">
          <label htmfor="inputCourse" className="form-label">Course</label>
           <input type="text" className="form-control" id="inputcourse" value={course} onChange={(e) => setCourse(e.target.value)} /> 
           {/* <input
              className="form-select"
              aria-label="Default select example"
              name="course"
              id="exampleCourse"
              value={course}
              onChange={e => setCourse(e.target.value)}
            >
             {/* <option selected>Choose...</option> 
            <option defaultValue="Java">java</option>
            <option defaultValue="Reactjs">React</option>
            <option defaultValue="Testing">Testing</option>
            <option defaultValue="UI">UI</option>

          </select> */} 
        </div>

        <div className="row-3">
          <button type='submit' className="btn btn-primary" onClick={()=>update()}>Update</button>
        </div>
      </form>
      </div>
    </div>
  );

}
export default UpdateStudent
