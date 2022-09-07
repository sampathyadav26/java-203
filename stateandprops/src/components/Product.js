import React, { Component } from 'react'

 class Product extends Component {
    constructor(props) {   
        super(props);  
        this.state = {
          id:this.props.id,
          name:this.props.name,
          qty:this.props.qty,
          price:this.props.price

         
        }
    }       
  render() {

    return (
      <div>
          <h1>Product Information</h1>
          <hr/>
        <p>product Id:{this.state.id}</p>
        <p>product name:{this.state.name}</p>
        <p>product qty:{this.state.qty}</p>
        <p>product price:{this.state.price}</p>
        <hr/>

      </div>
    );
  }
}

export default Product;
