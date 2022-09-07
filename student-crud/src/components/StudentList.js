import React, { useEffect, useState } from 'react'
import StudentService from '../services/StudentService';
import { Link } from 'react-router-dom';
import CreateStudent from './CreateStudent';
import { useNavigate } from "react-router-dom";
function StudentList() {
    const [students, setStudents] = useState([]);
    let Navigate=useNavigate();
    //functional component lifecycle method (Functioanl hook)
    useEffect(() => {
        getAllStudents();

    }, [])

    const getAllStudents = async () => {
        const data = await StudentService.getAllStudents();
        console.log(" ====" + data.data)
        setStudents(data.data);
        console.log("Student List :"+students);

    };
    const CreateStudent=()=>{
        Navigate("/create");
    };

    return (
    <div className="container" >
        <h1>StudentList</h1>
        <hr/>
       <button className='btn btn-primary' style={{float:"left"}} onClick={CreateStudent}>+student</button>
      <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Course</th>
      <th scope="col">Action</th>
      
    </tr >
  </thead >
        <tbody>
            {
                students.map(student => {
                    return (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.course}</td>
                            <td>
                                <a className='btn btn-primary' style={{ margin: "10px" }}>Edit</a>
                                <button className='btn btn-danger' style={{ margin: "10px" }}> delete</button>
                            </td>


                        </tr>
                    )
                })
            }
        </tbody>
</table >
    </div >
  )
}

export default StudentList
