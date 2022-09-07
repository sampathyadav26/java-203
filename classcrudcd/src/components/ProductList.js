import axios from 'axios';
import React, { useEffect, useState } from 'react';
const basUrl="https://fakestoreapi.com/products";


function ProductList() {
  const[product,setproduct]=useState([]);
    useEffect(()=>{
        axios.get(basUrl).then((res)=>{
            console.log(product)
            setproduct(res.data);
        })
    },[])
  return (
    <div>
        <h1>ProductList</h1>
        <div className='container'>
            <table class="table table-border">
                <thead>
                    <tr>
                    <td>id</td>
                    <td>image</td>
                    <td>price</td>
                    <td>Description</td>
                    
                    </tr>
                </thead>
                <tbody>
                    {product.map(pro=>{
                        return(<tr key={pro.id}>
                            <td>{pro.id}</td>
                            <td><img src={pro.image} style={{width:"150px",height:"150px"}}/></td>
                            <td >{pro.price}</td>
                            <td>{pro.description}</td>
                            <td><button class="btn btn-primary">add to cart</button></td>
                            </tr>
                        )

                    })}
                    
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default ProductList
