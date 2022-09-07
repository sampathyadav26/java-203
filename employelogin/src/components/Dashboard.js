import React from 'react'

function Dashboard() {

  let products = [
    {
      "id": 1,
      "name": "rice",
      "qty": 21,
      "price": 1000
    },
    {
      "id": 2,
      "name": "dal",
      "qty": 2,
      "price": 100
    },
    {
      "id": 3,
      "name": "soaps",
      "qty": 24,
      "price": 1300
    }
  ];
  const productlist = products.map(product => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.qty}</td>
        <td>{product.price}</td>
        <td>
          <button className='btn btn-primary' style={{ margin: "10px" }}>Edit</button>
          <button className='btn btn-danger'>Delete</button>
        </td>

      </tr>
    )
  })
  return (

    <div className="container">
      <h1>Create Product</h1>
      <hr />
      <form>
  <div className="mb-3">
    <label htmFor="exampleInputid" className="form-label">Product Id</label>
    <input type="text" className="form-control" id="pid"/>
  </div>
  <div className="mb-3">
    <label htmFor="exampleInputname" className="form-label">Product Name</label>
    <input type="text" className="form-control" id="name"/>
  </div>
  <div className="mb-3">
    <label htmFor="exampleInputqty" className="form-label">Product qty</label>
    <input type="text" className="form-control" id="qty"/>
  </div>
  <div className="mb-3">
    <label htmFor="exampleInputprice" className="form-label">Product Price</label>
    <input type="text" className="form-control" id="price"/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={createProduct}>
    Create
    </button>
</form>
      <h1>Product List</h1>
      <hr />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">qty</th>
            <th scope="col">price</th>
            <th colSpan={"2"}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productlist}

        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
