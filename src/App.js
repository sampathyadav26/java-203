
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import CreateStudents from './componentss/CreateStudents';
import StudentList from './componentss/StudentList';
import UdateStudens from './componentss/UdateStudens';
import UpdateStudentData from './componentss/UpdateStudentData';
import ViewStudent from './componentss/ViewStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li><Link to='/create'>Crete Student</Link></li>
        <li><Link to='/upadate'>list Student</Link></li>
        
      </ul>
      {/* <StudentList/> */}
      <Routes>
        <Route path="/create" element={<CreateStudents/>}/>
        <Route path="/upadate" element={<UdateStudens/>}/>
        <Route path="/update/:id"  element={<UpdateStudentData/>}/>
        <Route path='/viewStu/:id' element={<ViewStudent/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
