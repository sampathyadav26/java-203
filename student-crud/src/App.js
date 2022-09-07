
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import UpdateStudent from './components/UpdateStudent';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <StudentList/>
     <Routes>
      <Route path="/create" element={<CreateStudent />}/>
      <Route path="/update" element={<UpdateStudent />}/>
      
     </Routes>
  
     </BrowserRouter>
    </div>
  );
}

export default App;
