import React, { useState } from 'react'
import StudentService from './services/StudentService';

function CreateStudents() {
    const[id,setId]=useState();
    const[name,setName]=useState();
    const[branch,setBranch]=useState();

   const  dataAdded=(e)=>{
    alert("data inserted")
    let obj = {
        "id":parseInt(id),
        "name":name,
        "branch":branch
    }
    StudentService.putALLStudentS(obj).then((res)=>{
        
    })
    .catch((res)=>{
        console.log(res.data);
    });
   }
    return (
        <div>
            <h1>create student form</h1>
            <div className='container'>
                <form >
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1"  className="form-label">Student Id</label>
                    <input type="text" className="form-control"  onChange={(e)=>setId(e.target.value)} value={id} id="StudentId" placeholder="StudentId" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Student Name</label>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} value={name} id="StudentName" placeholder="StudentName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Student Branch</label>
                    <input type="text" className="form-control" onChange={(e)=>setBranch(e.target.value)} value={branch} id="StudentBranch" placeholder="StudentBranch" />
                </div>
                <div>
                    <buttion className="btn btn-primary" onClick={dataAdded}>submit</buttion>
                </div>
                </form>

            </div>
        </div>
    )
}


export default CreateStudents
