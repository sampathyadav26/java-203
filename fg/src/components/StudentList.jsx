import React, { useEffect } from 'react'
import StudentService from '../services/StudentService';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    getAllStudents();

  }, []);
  const getAllStudents = async () => {
    const data = await StudentService.getAllStudents();
    console.log("=======>" + data.data);
    setStudents(data.data);
    console.log("Student List :" + students);
  };
  const createHandle = () => {
    navigate("/create");
  }
  const deleteData = async (id) => {



    await StudentService.deleteStudent(id);

    getAllStudents();

  }
  const handleEdit=(id)=>{
    navigate(`/update/${id}`)
  }
  const handleView=(id)=>{
    navigate(`/view/${id}`)
  }
  return (
    <div className='container'>
      <h1 className='heading-style'>Student List</h1>
      <hr />
      <button className='btn btn-info' style={{ float: "left" }} onClick={createHandle}>+Student</button>
      <table className="table content-color">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Cousre</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map(student => {
              return (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>
                    <button className='btn btn-info' style={{ margin: "10px" }} onClick={()=>handleEdit(student.id)} >Edit</button>
                    <button className='btn btn-danger' onClick={() => deleteData(student.id)}>delete</button>
                    <button className='btn btn-success' style={{ margin: "10px" }} onClick={() => handleView(student.id)}>view</button>
                  </td>

                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
