import React, { useEffect, useState } from 'react'
import FashionService from '../fashionservices/FashionService';

import {useNavigate, useParams } from "react-router-dom";

function AddToCart() {

    const [id,setId] =useState();
    const [title, setTitle] =useState();
    const [price, setprice] =useState();
    const [category,setcategory] =useState();
    const [image,setimage] = useState();

    const params = useParams();
    const navigate =useNavigate();

    useEffect(()=>{
        FashionService.getProduct(params.id).then(res => {
            setId(res.data.id);
            setTitle(res.data.title);
            setprice(res.data.price);
            setcategory(res.data.category);
            setimage(res.data.image);
            console.log("data is is"+ res.data.price);
            
        })
    },[]);

    function buy(){
         navigate(`/bought/${id}`);
        alert("Ordered Successfully");
    }
    
  return (
    <div>
        <h1>Product Added succesfully </h1>


            <div className="row" >
                <div className="card-group">
                    <div className='col-3 mb-2 ms-5'>
                        <div className="card border-primary" style={{ height: "33rem", width: "24rem" }}>
                            <div class="card-header border-dark">
                                <p className="card-text">Category :{category}</p>
                            </div>
                            <img src={image} className="card-img-top" alt="Network Issue" id="imagecard" />
                            <div className="card-body">
                                <p className="card-title">Title :{title}</p>
                                <p>Rate :{price}</p>
                            </div>
                            <div class="card-footer text-muted d-flex justify-content-between border-dark ">
                                <button className='btn btn-primary' onClick={buy}>Buy</button>
                                {/* <button onClick={() => history.goBack()}>Back</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
  )
}

export default AddToCart
