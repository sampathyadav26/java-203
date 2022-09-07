import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="picturs/bg.jpg" className="card-img" alt="Background" />
        <div class="card-img-overlay d-flex flex-column justify">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-center">New Arrivals</h5>
            <p className="card-text lead fs-2 text-center ">Check out the Trends
          </p>
         
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
