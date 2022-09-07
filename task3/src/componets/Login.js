import React from "react";

function Login() {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label htmlFor="Username" class="form-label">
            UserName
          </label>
          <input type="name" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label htmlFor="Username" class="form-label">
            Password
          </label>
          <input type="Password" class="form-control" id="name" />
        </div>
        a

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
