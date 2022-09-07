import React, { useEffect, useState } from 'react'
import EmployeeService from '../service/EmployeeService';
import {useNavigate} from 'react-router-dom'


function EmployeeList() {
    const navigate=useNavigate();
    
    const [employee, setemployee] = useState([]);
    useEffect(() => {
        getAllEmployee();
    }, []);
    const getAllEmployee = async () => {
        const empdata = await EmployeeService.getAllEmployees();
       
        setemployee(empdata.data);
       

    }
    const deleteemployees=(eid)=>{
     
       
        EmployeeService.deleteemployee(eid);
        getAllEmployee();
    }
   
    const updateemploy=(id)=>{
       
        
        navigate(`/update/${id}`);
    }
    const viewemploye=(id)=>{
        navigate(`/view/${id}`)
    }
   

    return (

        <div className="container">
            <h1>Employee List</h1>
            <hr />
            {/* <a className="btn btn-primary" style={{ float: "left" }}>+Employee</a> */}
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Age</th>
                        <th colSpan={"3"}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((emplye) => {
                        return (
                            <tr key={emplye.id}>
                                <td>{emplye.id}</td>
                                <td>{emplye.name}</td>
                                <td>{emplye.Salary}</td>
                                <td>{emplye.Age}</td>
                                <td>
                                    <a className="btn btn-primary" style={{ margin: "10px" }} onClick={()=>updateemploy(emplye.id)}>Edit</a>
                                    <button className="btn btn-danger" onClick={()=>deleteemployees(emplye.id)}>Delete</button>
                                    <button className="btn btn-success" style={{ margin: "10px" }} onClick={()=>viewemploye(emplye.id)}>View</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList
