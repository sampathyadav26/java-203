import { useState, useEffect } from 'react'

import { useParams, useNavigate } from "react-router-dom";
import StudentService from "./services/StudentService";

function ViewStudent() {
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
    return (
        <div>
            <h1>view students</h1>
            <div className="card  container"  style={{width:"300px"}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">id:{id}</li>
                    <li className="list-group-item">name:{name}</li>
                    <li className="list-group-item">branch:{branch}</li>
                </ul>
            </div>
        </div>
    )
}

export default ViewStudent
