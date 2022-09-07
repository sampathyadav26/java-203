import React, { useEffect, useState } from 'react'
import FashionService from '../service/FashionService';

function FashionStore() {
 
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    getAllProducts();
    FashionService.getAllProducts().then((res) => {
      console.log(res.data);
      setProducts(res.data);
      console.log(products);
    });
  }, []);

  const getAllProducts = async () => {
    const data = await FashionService.getAllProducts();
    console.log("===>" +JSON.stringify(data.data) );
};

  return (
    <div >
      <h1>Product List</h1>
      <hr/>
      <div className="container-fluid">
        <div className="row">
          <div className="card-group">
            {products.map((product) => {
              return (
                <div className="col-3 mb-2">
                  <div
                    className="card"
                    style={{ height: "32rem", width: "24rem" }}
                  >
                    <div class="card-header">
                      <p className="card-text">
                        <b>Category :{product.category}</b>
                      </p>
                    </div>
                    <img
                      src={product.image}
                      className="card-img-top image-style"
                      alt="Network Issue"
                      id="imagecard"

                    />
                    <div className="card-body">
                      <p className="card-title">
                        {" "}
                        <b>Title :</b>
                        {product.title}
                      </p>
                      {/* <p className="card-text"><b> Description :</b>{res.description}</p> */}
                    </div>
                    <div class="card-footer text-muted d-flex justify-content-between">
                      <p>
                        <b>Rate :{product.rating.rate}</b>
                      </p>
                      <p className="card-text">
                        <b>Count :{product.rating.count}</b>
                      </p>
                      <p>
                        <b>Price :{product.price}</b>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionStore
