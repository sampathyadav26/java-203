import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductServices from "../../services/ProductServices";

const UpdateProduct = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [rate, setRate] = useState("");
  const [count, setCount] = useState("");
  //============================================================

  const navigate = useNavigate("");
  const params = useParams();
  //============================================================

  useEffect(() => {
    settingData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //============================================================

  const settingData = async () => {
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

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    let obj = {
      id: id,
      title: title,
      description: description,
      price: price,
      category: category,
      rating: {
        rate: rate,
        count: count,
      },
    };
   await ProductServices.updateProduct(id, obj).then((res) => {
      console.log(res.data);
    });
    navigate("/adminlist");
  };
  return (
    <div>
      <center>
        <h1>Update Product</h1>
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
            value={id}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputImage" className="form-label">
            Image
          </label>
          <img
            src={image}
            className="card-img-top image-style"
            alt="Network Issue"
            id="imagecard"
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
            value={price}
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
            value={description}
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
            value={category}
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
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          Count:{" "}
          <input
            type="number"
            className="form-control"
            id="exampleInputCount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>

        <button onClick={handleUpdateProduct} className="btn btn-primary">
          Update Product
        </button>
      </form>
      {id} {category} {title} {count}
    </div>
  );
};

export default UpdateProduct;
