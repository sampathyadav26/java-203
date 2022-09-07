import React, { useEffect,useState } from 'react'
import axios from 'axios'
const CartsApi = () => {
    const[product,setProduct]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/carts").then((productData)=>{
    
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
                <td>userId</td>
                <td>date</td>
            </tr>
        </thead>
        <tbody>
            {
                product.map((items)=>{
                    return(
                        <tr key={items.id}>
                            <td>{items.id}</td>
                            <td>{items.userId}
                            </td>
                            <td>{items.date}</td>
                            
                            

                        </tr>
                    )

                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default CartsApi
