import React from 'react'

function Dashboard() {
    let products = [
        {
          "id":1,
          "name":"Rice",
          "qty":25,
          "price":1300
        },
        {
          "id":2,
          "name":"Soap",
          "qty":25,
          "price":120
        },
        {
          "id":3,
          "name":"abc",
          "qty":10,
          "price":150
        },
    
    
    
     ];
      const productList = products.map(product=>{
        return(
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.qty}</td>
            <td>{product.price}</td>
            <td>
              <button className='btn btn-primary' style={{margin:"10px"}}>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        )
      })
      return (
       
        <div>
          {console.log(products)}
          <h1>Products List</h1>
          <hr/>
          <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th colSpan={"2"}>Actions</th>
        </tr>
      </thead>
      <tbody>
       {productList}
      </tbody>
    </table>
        </div>
      )
   
   
  
}

export default Dashboard
