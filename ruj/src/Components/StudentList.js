import React, { useEffect, useState } from 'react'
import StudentService from '../services/StudentService';
import { useNavigate, Link } from 'react-router-dom';

function StudentList() {


  const [students, setStudents] = useState([]);

  const navigate = useNavigate;





  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = async () => {
    const arrdata = await StudentService.getStudents();
    setStudents(arrdata.data);
    console.log("Student list is:" + JSON.stringify(students));
  }

  const createStudent = () => {
    navigate("/create");
  }

  const editstudent = () => {
    navigate("/update");
  }

  // const deletestd = async (id) => {
  //   alert("delete");
  //   StudentService.deleteStudent(id).then(res => {
  //     // this.setState({ employees: this.state.employees.filter(employee => employee.id !== id)});
  //   });
  // }
  const deleteData = async (id) => {
    alert("delete")
    await StudentService.deleteStudent(id);
    getAllStudents();
  }

  return (
    <div className='container'>
      <h1>Students List</h1>
      <hr />
      <button className='btn float-start' onClick={createStudent}><Link to="/create" className='btn btn-primary'>+Student</Link></button>
      <table className="table border border-1">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">company</th>
            <th colSpan={"2"}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((std) => {
              return (
                <tr key={std.id}>
                  <td>{std.id}</td>
                  <td>{std.name}</td>
                  <td>{std.company}</td>
                  <td>
                    <button className='btn btn-primary' onClick={editstudent}>edit</button>
                    <button className='btn btn-danger' onClick={() => deleteData(std.id)}>delete</button>
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
