import React from 'react'
import { connect } from 'react-redux';

import './App.css';

function App(props) {
  const increment = () => { //increment action
    props.dispatch({
      type: "INCREMENT"
    });
  };
  const decrement = () => { //Descrement action
    props.dispatch({
      type: "DECREMENT"
    });
  };

  const Reset = () => { //Descrement action
    props.dispatch({
      type: "RESET"
    });
  };

  
  return (
    <div>
      <center>
        <h1 className="mt-5 display-1">{props.counter}</h1>
        <button onClick={increment} className="btn btn-success mr-5">
          Increment
        </button>

        <button onClick={Reset} className="btn btn-success ms-2">
          Reset
        </button>

        <span style={{ padding: 5 }}></span>
        <button onClick={decrement} className="btn btn-danger">
          Decrement
        </button>
      </center>
    </div>
  );
}

const mapStateToProps = state => { //to access state mapState through access any component
  return {
    counter: state.counter
  };
};
export default connect(mapStateToProps)(App);
