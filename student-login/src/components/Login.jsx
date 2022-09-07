import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        if (name === password) {
            navigate("/dashboard");
        }
    }
    return (
        <div className='changing'>
            <form>
                <div className="mb-3">
                    <label htmfor="exampleInputUserName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleInputUserName" onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmfor="exampleInputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword" onChange={e => setPassword(e.target.value)} />
                </div>

                <button className="btn btn-primary" onClick={login}>Login</button>
            </form>
            {name}{password}
        </div>
    )
}
export default Login
