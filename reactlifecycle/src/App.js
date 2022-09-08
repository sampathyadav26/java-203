import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  //no-1
  constructor(props){
    console.log("----constructor----");
    super(props);
    this.state ={
      msg:"Welcome to ReactJs"
    };
    this.changeState = this.changeState.bind(this);
  }
  changeState(){
    this.setState({msg:"Learning ReactJs Lifecyle methods"});
  }
  componentWillReceiveProps(newProps){
    console.log("---Componnet will recive props---");
  }
  //no-4
  shouldComponentUpdate(newProps,newState){
    return true;
  }
  componentWillMount(){
    console.log("---Component  will Mount----")
  }
  //no-3
  componentDidMount(){
    console.log("----componentDidMount method----")
  }
  com
  //no-2
  render() {
    console.log("--render method----");
    return (
      <div className='container'>
         <h1>ReactJs Component's Lifecyle Methods</h1>
         <h3>{this.state.msg}</h3>
         <button onClick={this.changeState} className="btn btn-primary">Click Me</button>
      </div>
    )
  }
}

export default App
