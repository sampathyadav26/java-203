import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import User from './components/User';
import Home from './components/Home';

function App() {
  return (
    <div><BrowserRouter>

    <ul>

      <li>

        <Link to="/Home">Home</Link>

      </li>

      <li>

        <Link to="/User">User</Link>

      </li>


    </ul>

    <Routes>

      <Route path="/Home" element={<Home />} />

      <Route path="/User" element={<User />} />

    </Routes>

  </BrowserRouter>
  
    </div>
  );
}

export default App;
