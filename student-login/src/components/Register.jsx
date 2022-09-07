import React, { useState } from 'react'

const Register = () => {
    const[id,setId]=useState();
    const[name,setName]=useState();
    const[branch,setBranch]=useState();
    const[percentage,setPercentage]=useState();
       
    let student={
        "id":parseInt(id),
        "name":name,
        "branch":branch,
        "percentage":parseInt(percentage)
       }

    const register = (e) => {
        e.preventDefault();
          
           let arr=[];
           arr.push(student);
           console.log(arr);
        alert(JSON.stringify(student))
    }
    return (
        <div>

        <div >

        <div className='changing'>
            <form>
                <div className="mb-3">
                    <label htmfor="exampleInputStudentId" className="form-label">Student Id</label>
                    <input type="number" className="form-control" id="exampleInputStudentId" onChange={e=>setId(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmfor="exampleInputStudentName" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="exampleInputStudentName" onChange={e=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmfor="exampleInputStudentBranch" className="form-label">Student Branch</label>
                    <input type="text" className="form-control" id="exampleInputStudentBranch" onChange={e=>setBranch(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmfor="exampleInputStudentPercentage" className="form-label">Student Percentage</label>
                    <input type="number" className="form-control" id="exampleInputStudentPercentage" onChange={e=>setPercentage(e.target.value)}/>
                </div>

                <button className="btn btn-primary" onClick={register}>Register</button>
            </form>
            {id}{name}{branch}{percentage}
        </div>
        </div>
        </div>
    )
}

export default Register
