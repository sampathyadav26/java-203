import React, { useState } from "react";
import { db } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
const Create = () => {
  const [products, setProducts] = useState();
  const ref = collection(db, "products");
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const createProduct = (e)=>{
    e.preventDefault();
  
    console.log(products);
    const data =addDoc(ref,{id,name,quantity,price})
  }
  return (
    <div className="container">
      <h1>Create Product</h1>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputId" className="form-label">
            Product Id
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
           
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Product Name
          </label>
          <input type="text" className="form-control" id="name" onChange={(e) => {
              setName(e.target.value);
            }}/>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputquantity" className="form-label">
            Product quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputprice" className="form-label">
            Product price
          </label>
          <input
            type="number"
            className="form-control"
            id="Price"
            
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <button onClick={createProduct} className="btn btn-primary">
          Submit
        </button>
      </form>
      {id}{name}{quantity}{price}
    </div>
  );
};

export default Create;
