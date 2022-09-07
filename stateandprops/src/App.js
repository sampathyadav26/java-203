import './App.css';
//import Employee from './components/Employee';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
       
        <hr/>
      <Product id="1" name="abc" qty="30" price="300"/>
      <Product id="2" name="pqr" qty="50" price="500"/>
      <Product id="3" name="xyz" qty="90" price="800"/> 
    
    </div>
  );
}

export default App;