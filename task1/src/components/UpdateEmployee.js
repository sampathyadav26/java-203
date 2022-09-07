import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function UpdateEmployee() {
  const [id, setid] = useState();
  const [name, setname] = useState();
  const [tech, settech] = useState();
  const params = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    //alert(params.id)
    EmployeeService.getEmployee(params.id).then((res) => {
      //alert(JSON.stringify(res.data));
      setid(res.data.id);
      setname(res.data.name);
      settech(res.data.tech);
      //console.log(res.data.id+" "+res.data.name);
    })
  }, []);

  const update = (e)=>{
    
    EmployeeService.updateEmployee(id,{id,name,tech}).then(res=>{
      //console.log(res.data);
    })
    navigate("/List");
  }

  return (
    <div>
      <h1>Update Employee details</h1>
      <form className='container'>
        <div className="mb-3" >
            <label classname="form-label" >ID</label>
            <input  name="id"class="form-control"  value={id} onChange={e=>setid(e.target.value)}  ></input>
        </div>
        <div classname="mb-3">
            <label class="form-label">name</label>
            <input  name="name" class="form-control"   value={name}onChange={e => setname(e.target.value)} ></input>
        </div>
        <div classname="mb-3">
            <label class="form-label">tech</label>
            <input name="tech" class="form-control"   value={tech} onChange={e => settech(e.target.value)} ></input>
        </div>
  
  
  <button type="submit" class="btn btn-primary" onClick={update}>update</button>
</form>
    </div>
  )
}

export default UpdateEmployee
