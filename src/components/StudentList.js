import React, { useEffect, useState} from 'react';
import StudentServices from '../services/StudentServices';
import {useNavigate} from 'react-router-dom'
import UpdateStudent from './UpdateStudent';
function StudentList() {
    const [students, setStudents] = useState([]);
const navigate=useNavigate();
    useEffect(() => {
       getAllStudent();
    
    }, []);

    const getAllStudent = async() => {
        
         const data = await StudentServices.getAllStudents();
        console.log("====>"+data);
        setStudents(data.data);
        console.log("Student List:"+students);
    }

    // const handleStudent=()=>{
    //     navigate("/CreateStudent");
    // }
    // let navigate=useNavigate();

const CreateStudent=()=>{
    Navigator("/create");
}
const deleteStuds=(id)=>{
    StudentServices.deleteStudent(id);
    getAllStudent();
}
const updateStudent=(id)=>{
    
    navigate(`/Update/${id}`)
}
const viewStudent=(id)=>{
    navigate(`/view/${id}`)
}
    
    return (
    
        <div className='container'>
            
            <h1>StudentList</h1>
            <hr />
            {/* <a className='btn btn-primary'style={{float:"left"}}><Link to="/Create">+Student</Link></a> */}
            {/* <button className='btn btn-primary'style={{margin:"10px"}}  onClick={handleStudent}>+student</button> */}
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Course</th>
                        <th colSpan={"2"}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {students.map((student)=>{
                                return(
                                    <tr key={student.id}>
                                        
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.course}</td>
                                        <td>
                                            <button className='btn btn-primary'style={{margin:"10px"}}onClick={()=>updateStudent(student.id)}>Edit</button>
                                            <button className="btn btn-danger" onClick={()=>{deleteStuds(student.id)}}>Delete</button>
                                            <button className='btn btn-primary'style={{margin:"10px"}} onClick={()=>viewStudent(student.id)}>View</button>
                                            
                                        </td>

                                    </tr>
                                );
                            })}
                            </tbody>
                            </table>
                        
                            </div>
          
    )
}

export default StudentList
