
import './App.css';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
          <li>
            <Link to="/create">Create Employee</Link>
          </li>
          <li>
            <Link to="/list">List Employees</Link>
          </li>
        </ul>
      <Routes>
        <Route path="/create" element={<CreateEmployee/>}/>
        <Route path="/update/:id" element={<UpdateEmployee/>}/>
        <Route path="/list" element={<EmployeeList/>}/>
        <Route path="/view/:id" element={<ViewEmployee/>}/>

      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
