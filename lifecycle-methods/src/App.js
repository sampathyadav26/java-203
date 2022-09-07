import React, { Component } from 'react'
class App extends Component {
  //lifecycle method 1
  constructor(props){
    super(props);
    console.log("-------constructor-------");
    this.state={
      msg:"welcome to React js"
      
    };
   
    this.changeState=this.changeState.bind(this);
    
  }
  changeState(){
   
    this.setState({msg:"learning ReactJs Lifecycle methods"});
  }
  shouldComponentUpdate(newProps,newState){
    return true;
  }
componentWillReceiveProps(){
  console.log("----component will recive props");

}
 componentWillMount(){
  console.log(" component will Mount");
 }
  //3 lifecycle method 
  componentDidMount(){
    console.log(".... component didMount...");
   
  }
//lifecycle method 2
  render() {
    console.log(".....render method....");
    return (
      <div className='container'>
        <h1> reactjs Components lifecycle Method</h1>
        <h3>{this.state.msg}</h3>
        <button onClick={this.changeState} className="btn btn-primary">click me</button>
       
      </div>
    )
  }
}

export default App


