
import './App.css';
import React, { Component } from 'react'
import Test1 from '/components/Test1'
class App extends Component {
  constructor(){
    super()
    this.state={
      name:'harikrishna',
      product:{
        pname:'mobile',
        price:100000,},
        arr :['hari','shasi','avinash']}
  }
  render() {
    return (
    <div>
       
        <center>
        <Test1/>
        </center>
      </div>
    )
  }
}
 export default App
