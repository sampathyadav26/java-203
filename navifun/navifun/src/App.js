import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
import User from './components/User';



function App() {

  return (

    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path="/Home" element={<Home />}></Route>

        </Routes>

       <User/>

      </BrowserRouter>

    </div>

  );

}



export default App;