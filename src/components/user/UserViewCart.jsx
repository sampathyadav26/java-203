import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartServices from "../../services/CartServices";
import Button from "@mui/material/Button";
import UserNavBar from "../navbar/UserNavBar";

const CartView = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProductsFromCart();
  }, []);
  const getAllProductsFromCart = () => {
    CartServices.getAllProductsFromCart().then((res) => {
      setProducts(res.data);
    });
  };

  const handleDeleteFromCart = async (cid) => {
    //e.preventDefault();
    await CartServices.removeProductFromCart(cid).then((res) => {
      console.log(res.data);

      getAllProductsFromCart();
    });
  };

  const handleBuyItemsInCart = () => {
    navigate("/buyItem");
  };

  return (
    <div>
      <UserNavBar />
      <center>
        <h1>My Cart</h1>
      </center>
      <hr />
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
                    <Button
                      variant="contained"
                      onClick={() => handleDeleteFromCart(product.id)}
                      // className="btn btn-primary"
                      style={{
                        margin: "15px",
                        borderRadius: 35,
                        backgroundColor: "rgb(203, 22, 86)",
                        fontSize: "18px",
                      }}
                    >
                      Remove From CART
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <center>
        <img alt="Network Issue" />
        <button
          className="btn btn-primary button-float-style"
          onClick={handleBuyItemsInCart}
        >
          Buy Items In Cart
        </button>
      </center>
    </div>
  );
};

export default CartView;
