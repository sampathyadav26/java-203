import React , {useState} from "react";
import { db } from "../firebase.config";
import{
    collection,
    //onSnapshot,
    addDoc
} from "firebase/firestore"


function Create() {
    const [id, setId]=useState();
    const [name, setName]=useState();
    const [qty,setqty]=useState();
    const [price,setprice]=useState();
    const ref=collection(db,"products");
    const addProduct =(e)=>{
        e.preventDefault();
        addDoc(ref,{id,name,qty,price});
        alert("successfully product added......");
    };
  return (
    <div className="container">
      <form>
        <div className="container">

  <div class="mb-3">
    <label htmlFor="exampleInputpid" class="form-label">
        product id
    </label>
    <input type="text" class="form-control" id="pid"
    value={id}
    onChange={(e) => setId(e.target.value)}
    />
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputpname" class="form-label">
        product Name
    </label>
    <input type="text" class="form-control" id="pname"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputpqty" class="form-label">
        product quantity
    </label>
    <input type="text" class="form-control" id="qty"
    value={qty}
    onChange={(e)=>setqty(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputprice" className="form-lable">
        product Price
    </label>
    <input type="text" className="form-control" id="price"
    value={price}
    onChange={(e) => setprice(e.target.value)}
    />
  </div>
 
  <button type="submit" class="btn btn-primary" onClick={addProduct}>
    Submit
    </button>
    <br/>
    {id}
    {name}
    {qty}
    {price}
    </div>
</form>
    </div>
  )
}

export default Create
