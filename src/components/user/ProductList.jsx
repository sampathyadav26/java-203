import React, { useEffect, useState } from "react";
import ProductServices from "../../services/ProductServices";
import CartServices from "../../services/CartServices";
import UserNavBar from "../navbar/UserNavBar";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductServices.getAllProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleAddToCart = (cid) => {
    ProductServices.getProduct(cid).then((res) => {
      console.log(res.data);

      const obj = {
        id: res.data.id,
        title: res.data.title,
        image: res.data.image,
        description: res.data.description,
        price: res.data.price,
        category: res.data.category,
        rating: {
          rate: res.data.rating.rate,
          count: res.data.rating.count,
        },
      };

      console.log(obj);
      CartServices.addProductToCart(obj).then((res) => {
        console.log(obj);
      });
    });
  };

  return (
    <div>
      <UserNavBar />
      <h1>Product List</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="card-group">
            {products.map((product) => {
              return (
                <div className="col-3 mb-2" key={product.id}>
                  <div
                    className="card"
                    style={{ height: "32rem", width: "24rem" }}
                  >
                    <div className="card-header">
                      <p className="card-text">
                        <b>Category :{product.category}</b>
                      </p>
                    </div>
                    <center>
                      <img
                        src={product.image}
                        className="card-img-top image-style"
                        alt="Network Issue"
                        id="imagecard"
                      />
                    </center>
                    <div className="card-body">
                      <p className="card-title">
                        {" "}
                        <b>Title :</b>
                        {product.title}
                      </p>
                      {/* <p className="card-text"><b> Description :</b>{res.description}</p> */}
                    </div>
                    <div className="card-footer text-muted d-flex justify-content-between">
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
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className="btn btn-primary"
                      style={{ margin: "15px" }}
                    >
                      ADD TO CART
                    </button>
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

export default ProductList;
