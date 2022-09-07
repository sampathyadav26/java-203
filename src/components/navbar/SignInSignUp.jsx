import React from "react";
import { Link } from "react-router-dom";

const SignInSignUp = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/signUp">Sign Up</Link>
        </li>
        <li>
          <Link to="/signIn">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default SignInSignUp;
