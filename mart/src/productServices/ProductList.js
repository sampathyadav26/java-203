import React , { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
const ProductList = () => {
    const AdminProductList = () => {
        const [products, setProducts] = useState([]);
        const navigate = useNavigate();

        useEffect(() => {
            getAllProducts();
          }, []);
          const getAllProducts = () => {
            productServices.getAllProducts().then((res) => {
              setProducts(res.data);
              console.log(res.data);
            });
          };
  return (
    <div>
      
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Product Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Quantity</th>
      <th scope="col">Product Price</th>
    </tr>
  </thead>
  <tbody>
  <td>{products.id}</td>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.quantity}</td>
                <td>{products.price}</td>
    
  </tbody>
</table>
    </div>
  );
  }}

export default ProductList
