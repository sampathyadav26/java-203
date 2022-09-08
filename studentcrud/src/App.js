import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
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
          <li> <Link to="/create">CreateStudent</Link></li>
          <li> <Link to="/list">list student</Link></li>
          <li> <Link to="/update/:id">UpdateStudent</Link></li>


        </ul>
        <Routes>
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
          <Route path="/list" element={<StudentList />} />
          <Route path="/view/:id" element={<ViewStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
