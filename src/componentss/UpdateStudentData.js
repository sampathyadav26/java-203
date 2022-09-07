import React, {useState, useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import StudentService from "./services/StudentService";


function UpdateStudentData() {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [branch, setBranch] = useState();
    const params = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
        StudentService.getAllStudent(params.id).then((res) => {
            setId(res.data.id);
            setName(res.data.name);
            setBranch(res.data.branch);
            
        })
    }, []);

    const update=()=>{
       
        StudentService.updateStudentsS(id,{id,name,branch}).then(res=>{
            console.log(res.data);
        })
        navigate("/upadate")
        
    }


    return (

        <div>
            <h1>upadate student form</h1>
            <div className='container'>
                <form >
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Student Id</label>
                        <input type="text" className="form-control" name="Id" onChange={(e) => setId(e.target.value)} value={id || ""} id="StudentId"  />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Student Name</label>
                        <input type="text" className="form-control"  name="Name" onChange={(e) => setName(e.target.value)} value={name || ""} id="StudentName"  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput3" className="form-label">Student Branch</label>
                        <input type="text" className="form-control" name="Branch" onChange={(e) => setBranch(e.target.value)} value={branch || ""} id="StudentBranch"  />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={()=>update()}> Update </button>
                </form>
            </div>
        </div>
    )
}



export default UpdateStudentData
