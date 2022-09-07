import React, { useEffect, useState } from "react";
import ProductServices from "../../services/ProductServices";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "../navbar/AdminNavBar";
const AdminProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  //===========================================================
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = () => {
    ProductServices.getAllProducts().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  };
  //============================================================
  const handleEditProduct = (id) => {
    navigate(`/update/${id}`);
  };
  //============================================================
  const handleDeleteProduct = (id) => {
    ProductServices.deleteProduct(id).then((res) => {
      getAllProducts();
    });
  };
  //============================================================
  const handleViewProduct = (id) => {
    navigate(`/view/${id}`);
  };
  return (
    <div>
      <AdminNavBar/>
      <div className="container">
        <center>
          <h1>Admin Product List</h1>
        </center>
        <table className="table table-hover " style={{ alignItems: "center" }}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Rating</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    Rate :{product.rating.rate}
                    Count :{product.rating.count}
                  </td>
                  <td>
                    <center>
                      <img
                        src={product.image}
                        className="card-img-top image-style"
                        alt="Network Issue"
                        id="imagecard"
                      />
                    </center>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      onClick={() => handleEditProduct(product.id)}
                      // className="btn btn-primary"
                      style={{
                        margin: "15px",
                        borderRadius: 35,
                        backgroundColor: "rgb(203, 22, 86)",
                        fontSize: "18px",
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      onClick={() => handleViewProduct(product.id)}
                      // className="btn btn-primary"
                      style={{
                        margin: "15px",
                        borderRadius: 35,
                        backgroundColor: "rgb(203, 22, 86)",
                        fontSize: "18px",
                      }}
                    >
                      View
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      onClick={(e) => handleDeleteProduct(product.id)}
                      // className="btn btn-primary"
                      style={{
                        margin: "15px",
                        borderRadius: 35,
                        backgroundColor: "rgb(203, 22, 86)",
                        fontSize: "18px",
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductList;
