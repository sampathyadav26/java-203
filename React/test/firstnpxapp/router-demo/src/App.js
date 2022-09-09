import './App.css';
//import './index.js';port './Components/Indent.js'

import {Navbar,Nav,Container} from 'react-bootstrap'
// import About from './Components/About';
// import Contact from './Components/Contact';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import ScriptTag from 'react-script-tag';

//import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

// function App() {
 // {
  /* return (
      <div>
      <>
      <br />
      <Navbar style={{backgroundColor:"darkblue"}} variant="light">
        <Container>
        <Navbar.Brand href="#home" style={{color:"red"}}>Navbar</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#About" style={{color:"white"}}>About Us</Nav.Link>
            <Nav.Link href="C:\Users\ojas1\Desktop\React\test\firstnpxapp\router-demo\src\Contact.js" style={{color:"white"}}>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/><br/>
      <div className='container' >
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted" style={{width:"50"}}>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></div>
    </> */
  //}
    //{
      /* <div>
      <Routes>
      <Route path="C:\Users\ojas1\Desktop\React\test\firstnpxapp\router-demo\src\About.js" element={<About/>}/>

      </Routes>
    </div> 
    
<index/>
   <About/>
   <Contact/>
          </div>
  );
}*/
//}
import React, { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
//import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

//function FormExample() {
  // function clickSubmitButton(){
  //      var array={};
  //       array.name=document.getElementById("name").value;
  //       array.des=document.getElementById("designation").value;
  //       array.sal=document.getElementById("salary").value;
  //       // console.log(array) 
  //       insertNewRow(array)
  //       resetForm();
  //   }  
  //   function insertNewRow(data){
  //       var table = document.getElementById("root");
  //       var row = table.insertRow();
  //       var cell1 = row.insertCell(0);
  //       cell1.innerHTML = data.name;
  //   var cell2 = row.insertCell(1);
  //       cell2.innerHTML = data.des;
  //       var cell3 = row.insertCell(2);
  //       cell3.innerHTML = data.sal;
  //       var cell4 = row.insertCell(3);
  //       cell4.innerHTML = "<button id='btnEdit' class='btn btn-success' onclick='edit()'>Edit</button> <button id='btnDel'  class='btn btn-danger'>Delete</button>";
  //       
  //   }
  //   function resetForm(){
  //       document.getElementById("name").value="";
  //       document.getElementById("designation").value="";
  //       document.getElementById("salary").value="";
  //   }
  //   function deleteRow(){
  //       
  //            
  //   }
  function App() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <>
      <div>
      <br />
      <Navbar style={{backgroundColor:"darkblue"}} variant="light">
        <Container>
        <Navbar.Brand href="#home" style={{color:"red"}}>Navbar</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#About" style={{color:"white"}}>About Us</Nav.Link>
            <Nav.Link href="C:\Users\ojas1\Desktop\React\test\firstnpxapp\router-demo\src\Contact.js" style={{color:"white"}}>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/><br/>
      </div>
      </>
      <div className='container'>{/*tip of the day:in div tag if u take className as container it'll minimize the size of the form*/}
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              defaultValue="OttoMark"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
      {/* <Button type="submit" onClick={clickSubmitButton()}>Submit form</Button> */}
    </Form>
    </div>
    {/* <Indent/> */}
    {/* <index/> */}
    </div>
  );
}


export default App;
