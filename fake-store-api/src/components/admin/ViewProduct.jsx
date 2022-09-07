import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductServices from "../../services/ProductServices";
const ViewProduct = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [rate, setRate] = useState("");
  const [count, setCount] = useState("");
  //============================================================

  const params = useParams();
  //============================================================

  useEffect(() => {
    settingData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //============================================================

  const settingData = async() => {
   await ProductServices.getProduct(params.id).then((res) => {
      console.log(res.data);
      setId(res.data.id);
      setTitle(res.data.title);
      setImage(res.data.image);
      setDescription(res.data.description);
      setPrice(res.data.price);
      setCategory(res.data.category);
      setRate(res.data.rating.rate);
      setCount(res.data.rating.count);
    });
  };
  //============================================================

  return (
    <div>
      <center>
        <h1>View Product</h1>
      </center>
      <hr />
      <center>
        <table className="container">
          <tr>
            <th>Image</th>
            <td>
              <img
                src={image}
                className="card-img-top image-style"
                alt="Network Issue"
                id="imagecard"
              />
            </td>
          </tr>
          <tr>
            <th>Id : </th>
            <td>{id}</td>
          </tr>
          <tr>
            <th>Title : </th>
            <td>{title}</td>
          </tr>
          <tr>
            <th>Description: </th>
            <td>{description}</td>
          </tr>
          <tr>
            <th>Category : </th>
            <td>{category}</td>
          </tr>
          <tr>
            <th>Price : </th>
            <td>{price}</td>
          </tr>
          <tr>
            <th>
              Rating : <br />
            </th>
            <td>
              <b>Rate : </b>
              {rate}
              <b>      Count : </b>
              {count}
            </td>
            
          </tr>
        </table>
      </center>
    </div>
  );
};

export default ViewProduct;
