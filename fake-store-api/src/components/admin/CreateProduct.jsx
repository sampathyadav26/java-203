import React, { useState } from "react";
import ProductServices from "../../services/ProductServices";
import {useNavigate} from "react-router-dom"
const CreateProduct = () => {
  
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [rate, setRate] = useState();
  const [count, setCount] = useState();

    const navigate=useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    let obj = {
      id: id,
      title: title,
      image: image,
      description: description,
      price: price,
      category: category,
      rating: {
        rate: rate,
        count: count,
      },
    };
    ProductServices.createProduct(obj).then((res) => {
      console.log(res.data);
      navigate("/list")
    });
  };
  return (
    <div>
      <center>
        <h1>Create Product</h1>
      </center>
      <hr />
      <form className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputId" className="form-label">
            Id
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputId"
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputImage" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputImage"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPrice"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputDescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputDescription"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputCategory" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputCategory"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputRating" className="form-label">
            Rating:
          </label>
          <br />
          Rate:{" "}
          <input
            type="number"
            className="form-control"
            id="exampleInputRate"
            onChange={(e) => setRate(e.target.value)}
          />
          Count:{" "}
          <input
            type="number"
            className="form-control"
            id="exampleInputCount"
            onChange={(e) => setCount(e.target.value)}
          />
        </div>

        <button onClick={handleCreate} className="btn btn-primary">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
