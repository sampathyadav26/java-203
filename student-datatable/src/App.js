import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StudentList from './components/StudentList';
import ProductApi from './components/ProductApi';
import CartsApi from './components/CartsApi';



function App() {
  return (
    <div className="App">
     {/* <StudentList/> */}
     <ProductApi/>
     {/* <CartsApi/> */}
    </div>
  );
}

export default App;
