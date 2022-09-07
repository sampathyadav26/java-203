
import './App.css';
import { connect } from 'react-redux/es/exports';

import React from 'react'

/*
export class App extends Component {
  increment=()=>{
    this.props.dispatch({
      type:"INCREMENT"
    })
  };
  decrement=()=>{
    this.props.dispatch({
      type:"DECREMENT"
    })
  };
  render() {
    return (
      <div>
        <center>
          <h2>{this.props.count}</h2>
          <button className="btn btn-success mr-5" onClick={this.increment} >increment</button>
          <span style={{padding:5}}/>
          <button className="btn btn-danger mr-5" onClick={this.decrement} >decrement</button>
        </center>
      </div>
    )
  }
}
const mapStateToProps = state => { //to access state mapState through access any component
  return {
  count: state.count
  };
  };
  export default connect(mapStateToProps)(App);
*/

function App(props) {
  const increment = () => {
    props.dispatch({ type: 'INCREMENT' })
  };
  const decrement = () => {
    props.dispatch({
      type: "DECREMENT"
    })
  };
  return (
    <div>
      <center>
        <h2>{props.count}</h2>
        <button className="btn btn-success mr-5" onClick={increment} >increment</button>
        <span style={{ padding: 5 }} />
        <button className="btn btn-danger mr-5" onClick={decrement} >decrement</button>
      </center>
    </div>
  )
}

const mapStateToProps = state => { //to access state mapState through access any component
  return {
    count: state.count
  };
};
export default connect(mapStateToProps)(App);


