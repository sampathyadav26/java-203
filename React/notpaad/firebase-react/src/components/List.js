import React, { useEffect, useState } from 'react'
import { db } from "../firebase.config";
import {
    collection,
    onSnapshot,
    getDoc
  } from "firebase/firestore"
function List() {
    const[products,setProducts]=useState([]);
    const ref = collection(db, "products");
    useEffect(()=>{
       
        const snapshot =  ref.get();
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
    },[]);
  return (
    <div className='container'>
      <h1>Product List</h1>
      <hr/>
    </div>
  )
}

export default List
