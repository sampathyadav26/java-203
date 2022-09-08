import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FakeApp() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProduct(res.data)
            })
    }, [])
    return (
        <div>
            <h1>ONLINE STORE</h1>
            <div className='container'>
                <table className='table table-bordered border-primary'>
                    <thead className='border border-1'>
                        <tr id="bg">
                            <td>id</td>
                            <td>image</td>
                            <td>Price</td>
                            <td>Description</td>
                        </tr>
                    </thead>
                    <tbody className='border border-1'>
                        {
                            product.map(produ => {
                                return (
                                    <tr key={produ.id} >
                                        <td>{produ.id}</td>
                                        <td><img src={produ.image} alt={produ.id} style={{ width: "150px", height: "150px" }}></img></td>
                                        <td>{produ.price}</td>
                                        <td>{produ.description}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default FakeApp

