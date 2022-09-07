import React, { Component } from 'react'

class App extends Component {
  //no-1
 constructor(props){
  console.log("----constructor----");
  super(props);
  this.state={
    msg:"Welcome to React Js"
};
   this.changeState=this.changeState.bind(this);
}
changeState(){
  this.changeState=({msg:"Learning ReactJs Lifecycle Methods"})
}
//no-4
shouldComponentUpdate(newProps,newState){
  return true;
}
componentWillReceiveProps(newProps){
  console.log("---componentWillReciveProps---")
}

componentWillMount(){
  console.log("---componenWillMount method---")
}

//no-3
componentDidMount(){
  console.log("---componentDidMount method---")
}

//no-2
  render() {
    console.log("---render method---")
    return (
      <div className='container'>
        
      <h1>ReactJs Component Lifecycle Methods</h1>
      <h3>{this.state.msg}</h3>
      <button onClick={this.changeState} className="btn btn-primary">Click Me</button>
      </div>
    )
  }
}

export default App

