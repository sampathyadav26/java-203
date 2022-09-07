import React from 'react'
import logo3 from '../assets/tech.jpg';
function Home() {
  return (
    <div className="box">
      <h2>Home</h2>
      <p>Home Services</p>
      <div className="card">
        <div className="card-body">
        <img src={logo3} className="card-img-top" id="image" alt="..." width="100px" height="300px" />
         
          <div className="card" id="Innercard" >
            <div className="card-body">
              <h5 className="card-title">Login-Form</h5>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
             
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div className="card">
              <button class="btn btn-primary" type="submit">Button</button>
  
           </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
