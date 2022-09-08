import React, { useEffect, useState } from 'react'


import StudentService from '../services/StudentService';

import { useNavigate } from 'react-router-dom'
function StudentList() {
    const [students, setStudents] = useState([]);
    let navigate = useNavigate();
    //Functional Comment LifeCycle PaymentMethodChangeEvent(functional hook)
    useEffect(() => {
        getAllstudents();
    }, []);

    const getAllstudents = async () => {
        const data = await StudentService.getAllstudents();
        console.log("===>" + data.data);
        setStudents(data.data);
        console.log("Student List :" + students);
    };
    const CreateStudent = () => {
        navigate("/create");
    };
    const deleteStudent = async (id) => {
        alert("delete")
        await StudentService.deleteStudent(id)
        getAllstudents();

    }
    const update = (id) => {
        navigate(`/update/${id}`)
    }
    const handleView=(id)=>{
        navigate(`/view/${id}`)
    }
    return (
        <div className='container'>
            <h1> Student list</h1>
            <hr />
            {/* <a className="btn btn-primary" style={{float:"left"}}><Link to="/create">+Student</Link></a> */}
            <button className="btn btn-primary" style={{ float: "left" }} onClick={CreateStudent}>+student</button>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Course</th>
                        <th scope="col">Salary</th>
                        <th colSpan={"2"}>Actions</th>
                    </tr>
                </thead>
               
                    <tbody className='content-color'>
                    {
                        students.map(student => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.course}</td>
                                    <td>{student.sal}</td>
                                    {/* <td>
                                        <a className="btn btn-primary" style={{ margin: "10px" }}>Edit</a>
                                        <button className="btn btn-danger">Delete</button>
                                    </td> */}
                                    <td>

                                        <button className='btn btn-primary' onClick={() => update(student.id)} style={{ margin: "2px" }}>edit</button>

                                        <button className='btn btn-danger' onClick={() => deleteStudent(student.id)} style={{ margin: "10px" }}>Delete</button>
                                        <button className='btn btn-success' onClick={() => handleView(student.id)}>View</button>

                                    </td>

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
