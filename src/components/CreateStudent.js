import React, { useState } from 'react'
import StudentServices from '../services/StudentServices';

function CreateStudent() {
    const [id, setid] = useState();
    const [name, setName] = useState();
    const [course, setCourse] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            "id": id,
            "name": name,
            "course": course

        }
        StudentServices.createStudent(obj).then(res => {
            console.log("added");
        })
    }
    return (
        <div className='container'>
            <div className='headingstyle'>
            <h1>CreateStudent</h1>
            <hr />
            <form class="row g-3">
                <div clasName="col-md-3">
                    <label htmfor="inputid" className="form-label">StudentId</label>
                    <input type="text" className="form-control" id="inputId" onChange={(e) => setid(e.target.value)} />
                </div>
                <div className="row-md-3">
                    <label htmfor="inputName" className="form-label">StudentName</label>
                    <input type="text" className="form-control" id="inputName" onChange={(e) => setName(e.target.value)} />
                </div>
                <div classNam="row-3">
                    <label htmfor="inputAddress" className="form-label">Course</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="course" onChange={(e) => setCourse(e.target.value)} />
                </div>
                
                <div className="col-12">
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default CreateStudent
