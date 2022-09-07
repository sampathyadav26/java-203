import React, { useState } from 'react'

function EmployeeList() {
 const [employees,setEmployees]=useState();

  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Domain</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    
    
  </tbody>
</table>
    </div>
  )
}

export default EmployeeList
