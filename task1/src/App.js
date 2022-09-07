import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import "./App.css";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        
         
          

        
        <li><Link to="/List">Employee list</Link></li>
        {/* <li><Link to="/create"> CreateEmployee</Link> </li> */}
        {/* <li>  <Link to="/update">UpdateEmployee</Link></li> */}
      </ul>
      
    <Routes>
      <Route path="create" element={<CreateEmployee/>}/>
      <Route path="update/:id" element={<UpdateEmployee/>}/>
      <Route path="List" element={<EmployeeList />}/>
    </Routes>
    
      </BrowserRouter>
     
    </div>
  );
}

export default App;
