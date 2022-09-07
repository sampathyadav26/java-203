import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Create from "./components/Create";
import Login from "./components/Login";
import ProductList from "./productServices/ProductList";

function App() {
  return (
    <div className="App">
      <Create/>
      <Login/>
      <ProductList/>
    </div>
  );
}

export default App;
