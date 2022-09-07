import React from 'react'
import logo from '../assets/puri.jpg';
import logo1 from '../assets/Dosa.jpg';
import logo2 from '../assets/vada.jpg';
function AboutUs() {
  return (
    <div>
      <h1>Services</h1>
      <div classNameName="row row-cols-1 row-cols-md-3 g-4">
        <div className="col"   id="car">
          <div className="card h-50"   >
            <img src={logo} className="card-img-top" alt="..."width="100px" height="300px" />
            <div className="card-body" >
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col" id="car">
          <div className="card h-50"  >
            <img src={logo1} className="card-img-top" alt="..." width="100px" height="300px" />
            <div className="card-body" >
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col" id="car1">
          <div className="card  h-50" >
            <img src={logo2} className="card-img-top" alt="..." width="100px" height="300px" />
            <div className="card-body" >
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col" id="car2">
          <div className="card  h-50" >
            <img src={logo2} className="card-img-top" alt="..." width="100px" height="300px" />
            <div className="card-body" >
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col" id="car3">
          <div className="card  h-50" >
            <img src={logo2} className="card-img-top" alt="..."width="100px" height="300px" />
            <div className="card-body" >
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col" id="car4">
          <div className="card  h-50" >
            <img src={logo2} className="card-img-top" alt="..." width="100px" height="300px" />
            <div className="card-body" >
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col" id="car5">
          <div className="card  h-50" >
            <img src={logo2} className="card-img-top" alt="..." width="100px" height="300px" />
            <div className="card-body" >
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col" id="car6" >
          <div className="card  h-50"  >
            <img src="..." className="card-img-top" alt="..." width="100px" height="300px" />
            <div className="card-body" >
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default AboutUs
