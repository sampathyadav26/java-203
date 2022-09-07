
import React from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from "./components/CreateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <ul>
          <li>
            <Link to="/create">Create Employee</Link>
          </li>
          <li>
            <Link to="/list">Employee List</Link>
          </li>
         
        </ul>
        <Routes>
          <Route path="/create" element={<CreateEmployee />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
          <Route path="/list" element={<EmployeeList />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
