import React, { useState } from 'react'
function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            "name": name,
            "email": email,
            "password": password,
          }
        }
  return (
    <div  className='container'>
        <h1>Registration Form</h1>
      <form>
      <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName" onChange={(e) => setName(e.target.value)}/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail"  onChange={(e) => setEmail(e.target.value)} />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword" onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Register
