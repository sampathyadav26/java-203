
import React, { useState } from 'react';
import { db } from "../FireBaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function Create() {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [qty, setQty] = useState();
    const [price, setprice] = useState();
    const ref = collection(db, "products");
    let navigate = useNavigate();

    const addProduct = (e) => {
        e.preventDefault();
        addDoc(ref, { id, name, qty, price });
        alert("Item added succesfully");
        navigate('/list');

    }
    return (
        <div className='container'>
            <h1>Food products</h1>
            <hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputid">Product Id</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pid"
                        value={id}
                        onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputid">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pid"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputid">Product Qty</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pid"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputid">Product Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pid"
                        value={price}
                        onChange={(e) => setprice(e.target.value)} />
                </div>

                <button className="btn btn-primary" onClick={addProduct}>Submit</button>
            </form>
        </div>
    )
}

export default Create
