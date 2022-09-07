import React from "react";
import { Link } from "react-router-dom";
const UserNavBar = () => {
  return (
    <div>
      <ul>
        <li className="float-style">
          <Link to="/userProductsList">Products</Link>
        </li>
        <li className="float-style">
          <Link to="/userViewCart">View Cart</Link>
        </li>
        <li>
        <Link to="/signIn">Sign Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserNavBar;
