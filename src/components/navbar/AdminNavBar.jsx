import React from "react";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <div>
      <ul>
        <li className="float-style">
          <Link to="/adminList">Admin List</Link>
        </li>
        <li className="float-style">
          <Link to="/create">Create</Link>
        </li>
        <li>
        <Link to="/adminLogin">Sign Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavBar;
