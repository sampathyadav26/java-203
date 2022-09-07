
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import StudentList from './components/StudentList';
import CreateStudent from './components/CreateStudent';
import UpdateStudent from './components/UpdateStudent';
import ViewStudent from './components/ViewStudent';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <ul>
        <li><Link to="/create">Create Student</Link></li>
        <li><Link to="/list">List Student</Link></li>
        
      </ul>
   
      <Routes>
        <Route path="/create" element={<CreateStudent/>}/>
        <Route path="/list" element={<StudentList/>}/>
        <Route path="/update/:id" element={<UpdateStudent/>}/>
        <Route path="/view/:id" element={<ViewStudent/>}/>
       

      </Routes>
      </BrowserRouter>
  
      
    </div>
  );
}

export default App;
