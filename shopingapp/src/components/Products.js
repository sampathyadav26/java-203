import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoding] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getproducts = async () => {
      setLoding(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoding(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getproducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct=(cat)=>{
    const updatedlIST=data.filter((e)=>e.category===cat);
    setFilter(updatedlIST);
  }
  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women")}
          >
            Women
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Men")}
          >
            Men
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Electrons")}
          >
            Electrons
          </button>
        </div>
        {filter.map((Products) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4 " key={Products.id}>
                  <img
                    src={Products.image}
                    class="card-img-top"
                    alt={Products.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {Products.title.substring(0, 12)}
                    </h5>
                    <p class="card-text laed fw-bold">${Products.price}</p>
                    <a href="#" class="btn btn-primary">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr></hr>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Products;
