import React, { useState } from 'react'

const Dashboard = (props) => {
    const studentsData = [{
        "id": 1,
        "name": "Chandra",
        "branch": "Civil",
        "percentage": 90
    },
    {
        "id": 2,
        "name": "sona",
        "branch": "mech",
        "percentage": 65
    },
    {
        "id": 3,
        "name": "mithra",
        "branch": "eee",
        "percentage": 78
    }
    ]
   // const [students,setStudents]=useState(studentsData)
    const editStudent=()=>{
        alert("edit method");
    } 
    const deleteStudent=()=>{
        alert("delete method");
    }
    
    const studentList = studentsData.map(studentData => {
        return (<tr key={studentData.id}>
            <td>{studentData.id}</td>
            <td>{studentData.name}</td>
            <td>{studentData.branch}</td>
            <td>{studentData.percentage}</td>
            <td>
                <button className='btn btn-primary' style={{ margin: "10px" }} onClick={editStudent}>Edit</button>
                <button className='btn btn-danger'onClick={deleteStudent}>Delete</button>
            </td>
        </tr>)
    })
    return (
        <div>
            {console.log(studentList)}
            <h1 ><center>Student List</center></h1>
            <hr/>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Percentage</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>

                {studentList}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
