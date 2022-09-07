
import './App.css';
import StudentList from './components/StudentList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UpdateStudent from './components/UpdateStudent';
import CreateStudent from './components/CreateStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <ul>

          <li>  <Link to="/Create">Create Student</Link></li>
          <li> <Link to="/list">List Student</Link></li>
          {/* <li><Link to="/update">Update Student</Link></li> */}
        </ul>

        <Routes>
          <Route path="/Create" element={<CreateStudent />} />
          <Route path="/Update/:id" element={<UpdateStudent />} />
          <Route path="/list" element={<StudentList />} />
          <Route path="/view/:id" element={<ViewStudent/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
