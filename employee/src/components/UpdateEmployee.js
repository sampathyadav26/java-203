
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeServices from "../Service/EmployeeServices";

function UpdateEmployee() {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [batch, setBatch] = useState();
    const [salary, setSalary] = useState();
    const params = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        EmployeeServices.getEmployee(params.id).then(res => {
            setId(res.data.id)
            setName(res.data.name)
            setBatch(res.data.batch)
            setSalary(res.data.salary)
            console.log("Update Employee data" +res.data.id + " " + res.data.name)
        })
    }, []);
    const update = (e) => {
        e.preventDefault();
        EmployeeServices.UpdateEmployee(id, { id, name, batch, salary }).then(res => {
            console.log(res.data);
        })
        navigate("/list");
    }
    return (
        <div>
            <h1>Update Employee</h1>
            <hr />
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputId" className="form-label">
                            Id
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputId"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">
                            Employee Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputName"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputBatch" className="form-label">
                            Batch
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputBatch"
                            value={batch}
                            onChange={e => setBatch(e.target.value)}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputBatch" className="form-label">
                            Salary
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputBatch"
                            value={salary}
                            onChange={e => setSalary(e.target.value)}
                        />

                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                         onClick={(e) => update(e)}
                    >
                        Update
                    </button>
                    {id}{name}{batch}{salary}
                </form>
            </div>
        </div>
    );
}
export default UpdateEmployee;