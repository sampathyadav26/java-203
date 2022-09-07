import React, { useEffect, useState } from 'react'
import {useNavigate} from   "react-router-dom";
import StudentService from './services/StudentService';

function StudentList() {
    const[students,setStudent]=useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
       getAllStudent();
    
     }, [])
     const getAllStudent= async()=>{
        const data =await StudentService.getAllStudentS();
        setStudent(data.data)
     }
     const  deleteStu=(id)=>{
      
      console.log(id);
      StudentService.deleteStudentS(id);
        getAllStudent();
       
      
      }
      const updateData=(id)=>{
        console.log(id)
        navigate(`/update/${id}`);
      }

      const viewStudent=(id)=>{
       
        navigate(`/viewStu/${id}`)
      }
      
      // const UpdateStudent=(id)=>{
      //   navigate(`/update/${id}`);
      // }
     

  return (
    <div className="container">
      <h1>STUDUENT LIST</h1>
      <hr/>
      <table className="table table-hover">
        <thead>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>branch</td>
                <td>action</td>
            </tr>
        </thead>
        <tbody>
            {
                students.map(student=>{
                    return(
                        <tr key={student.id}>
                            
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.branch}</td>
                            <td><button className='btn btn-primary' onClick={()=>updateData(student.id)}>EDIT</button></td>
                            { <td><button className='btn btn-danger' onClick={()=>deleteStu(student.id)}>DELETE</button></td> }
                            <td><button className='btn btn-primary' onClick={()=>viewStudent(student.id)} >view</button> </td>
                        </tr>
                    )

                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
