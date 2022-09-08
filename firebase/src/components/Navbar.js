import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Create from './Create';
import List from './List';

function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li> <Link to="/create">Create</Link></li>
          <li> <Link to="/list">list</Link></li>
        </ul>
        <Routes>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/list' element={<List />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
