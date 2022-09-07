import React from 'react'

function CreateUser() {
  return (
    <div>
      <h1>CreateUser</h1>

      <form className='container'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input  class="form-control" id="exampleInputEmail1"  placeholder='Emter your name'/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="age" class="form-control" id="exampleInputPassword1" placeholder='Age'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">password</label>
    <input type="password" class="form-control" id="password" placeholder='password'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">password</label>
    <input type="password" class="form-control" id="password" placeholder='UserName'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">confirm password</label>
    <input type="password" class="form-control" id="Password" placeholder='password'/>
  </div>
  <button type="submit" class="btn btn-primary">create</button>
</form>
    </div>
  )
}

export default CreateUser
