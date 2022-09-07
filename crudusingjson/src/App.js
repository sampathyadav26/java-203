import './App.css';
import StudentList from './Components/StudentList';
import { BrowserRouter, Routes, Route ,Link} from 'react-router-dom';
import CreateStudent from './Components/CreateStudent';
import UpdateStudent from './Components/UpdateStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to="/create">Create Student</Link></li>
          <li><Link to="/slist">List Student</Link></li>
        </ul>
        <Routes>
          <Route path="/create" element={<CreateStudent />}></Route>
          <Route path="/update" element={<UpdateStudent />}></Route>
          <Route path="/slist" element={<StudentList />}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
