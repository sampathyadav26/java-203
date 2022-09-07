import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import StudentServices from '../services/StudentServices';


function ViewStudent(){
    const[id,setId]=useState();
    const[name,setName]=useState();
    const[course,setCourse]=useState();
    const params=useParams();
    
    useEffect(() => {
     StudentServices.getStudent(params.id).then((res)=>{
        setId(res.data.id);
      setName(res.data.name);
      setCourse(res.data.course);
    })
     
    }, []);
    
    

return(
<div className='container'>
    <div className='headingstyle'>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id:</th>
      <td>{id}</td>
      </tr>
      <tr>
      <th scope="col">Name:</th><td>{name}</td>
      </tr>
      <tr>
      <th scope="col">Course:</th><td>{course}</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
</div>
</div>
);
}
export default ViewStudent;