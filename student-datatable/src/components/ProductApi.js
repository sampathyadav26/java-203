import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ProductApi = () => {
  const[product,setProduct]=useState([])

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((productData)=>{

    console.log(productData.data);

    setProduct(productData.data);


    })

  },[])

  return (
    <div className='container'>
      <table className='table table-hover'>
        <thead>
            <tr>
                <td>id</td>
                <td>title</td>
                <td>image</td>
            </tr>
        </thead>
        <tbody>
            {
                product.map((items)=>{
                    return(
                        <tr key={items.id}>
                            <td>{items.id}</td>
                            <td>{items.title}</td>
                            <td><img src={items.image} alt={items.id} style={{width:"150px" , height:"150px"}}></img></td>

                        </tr>
                    )

                })
            }
        </tbody>
      </table>

    </div>
  )
}

export default ProductApi
