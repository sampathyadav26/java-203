
import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";
import './App.css';
import Create from './components/Create';
function App() {
  return (
    <div className="App">
      <Create/>
    </div>
  );
}

export default App;
