import React from 'react'

function Dashboard() {
        let employee = [
           {
             "name":"bhagya",
             "id":"22041",
             "role":"JD",
             "salary":1300
           },
           {
            "name":"Paru",
            "id":"22042",
            "role":"PD",
            "salary":1300
           },
           {
            "name":"Shiva",
            "id":"22043",
            "role":"TE",
            "salary":1300
           },
       
       
       
        ];
         const EmployeeList = employee.map(employee=>{
           return(
             <tr key={employee.id}>
               <td>{employee.name}</td>
               <td>{employee.empId}</td>
               <td>{employee.role}</td>
               <td>{employee.salary}</td>
               <td>
                 <button className='btn btn-primary' style={{margin:"10px"}}>Edit</button>
                 <button className='btn btn-danger'>Delete</button>
               </td>
             </tr>
           )
         })
         return (
          
           <div>
             {console.log(employee)}
             <h1>Employee List</h1>
             <hr/>
             <table class="table">
         <thead>
           <tr>
             <th scope="col">Id</th>
             <th scope="col">Name</th>
             <th scope="col">role</th>
             <th scope="col">salary</th>
             <th colSpan={"2"}>Actions</th>
           </tr>
         </thead>
         <tbody>
          {EmployeeList}
         </tbody>
       </table>
           </div>
         )
       }
    

export default Dashboard;
