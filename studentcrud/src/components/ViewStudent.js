import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import StudentService from '../services/StudentService';

function ViewStudent() {
    const [id, setId] = useState();
  const [name, setName] = useState();
  const [course, setCourse] = useState();
  const[sal,setSal]=useState();
  const params = useParams();
  useEffect(() => {
   StudentService.getStudent(params.id).then(res=>{
    setId(res.data.id)
    setName(res.data.name)
    setCourse(res.data.course)
    setSal(res.data.sal)
   })
  }, []);
  return (
    <div>
      <h1> View Student</h1>
      <table className="table-style">
        <tr>
            <td>id : </td>
            <td>{id}</td>
        </tr>
        <tr>
          <td>Name : </td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Course : </td>
          <td>{course}</td>
    
        </tr>
        <tr>
          <td>Salary : </td>
          <td>{sal}</td>
    
        </tr>
      </table>
    </div>
  )
}

export default ViewStudent
