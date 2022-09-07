import React, { useState } from "react";
import { db } from "../firebase.config";
import {
    collection,
    addDoc
  } from "firebase/firestore"
function Create() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [qty, setQty] = useState();
  const [price, setPrice] = useState();
  const ref = collection(db, "products");
  const addProduct = (e) => {
    e.preventDefault();
    addDoc(ref,{ id, name, qty, price });
    alert("Successfully Product added.....");
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputpid" className="form-label">
            Product Id
          </label>
          <input
            type="text"
            className="form-control"
            id="pid"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputpname" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="pname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputqty" className="form-label">
            Product Quantity
          </label>
          <input
            type="text"
            className="form-control"
            id="qty"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputprice" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={addProduct}>
          Submit
        </button>
        <br />
        {id}
        {name}
        {qty}
        {price}
      </form>
    </div>
  );
}

export default Create;
