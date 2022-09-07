import React from 'react'

function Dashboard() {
  let products=[
  {
    "id":1,
    "name":"Rice",
    "qty":25,
    "price":1203
  },
  {
    "id":2,
    "name":"Bread",
    "qty":10,
    "price":120
  },
  {
    "id":3,
    "name":"Gram",
    "qty":15,
    "price":520
  },
  {
    "id":4,
    "name":"Oil",
    "qty":19,
    "price":1200
  },
];
const productList=products.map(product=>{
  return(
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.qty}</td>
      <td>{product.price}</td>
      <td>
        <button className='btn btn-primary' style={{margin:"10px"}}>Edit</button>
        <button className='btn btn-danger'style={{margin:"10px"}}>Delete</button>
      </td>

    </tr>

  )

})
  return (
    <div>
     {console.log(products)}
      <h3> product List</h3>
      <hr/>
      
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
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
