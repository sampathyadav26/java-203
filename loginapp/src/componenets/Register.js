import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState("");
    const [pwd, setPassword] = useState("");
    const [add, setAddress] = useState("");
    const [add2, setAddress2] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const navigate = useNavigate();
    var arr = [{}];
    let login = (e) => {
        // if (name === pass) {
        //     navigate("/dashBoard");
        //     console.log("yes");
        // } else {
        //     alert("Invalid Username / Password.....");
        // }





        var email = document.getElementById("formGroupExampleInput1");
        arr.push(email);

        var pwd = document.getElementById("formGroupExampleInput2");
        arr.push(pwd);

        var add = document.getElementById("formGroupExampleInput3");
        arr.push(add);

        var add2 = document.getElementById("formGroupExampleInput4");
        arr.push(add2);

        var state = document.getElementById("formGroupExampleInput4");
        arr.push(state);

        var city = document.getElementById("formGroupExampleInput4");
        arr.push(city);

        var pincode = document.getElementById("formGroupExampleInput4");
        arr.push(pincode);

        console.log(arr);
    }


    const handleUserEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleUserPassword = (e) => {
        setPassword(e.target.value);
    };
    const handleUserAddress = (e) => {
        setAddress(e.target.value);
    };
    const handleUserAdress2 = (e) => {
        setAddress2(e.target.value);
    };
    const handleUserState = (e) => {
        setState(e.target.value);
    };
    const handleUserCity = (e) => {
        setCity(e.target.value);
    };
    const handleUserPincode = (e) => {
        setPincode(e.target.value);

    };
    return (
        <div className='container border border-2 mt-5 '>
            <h1>Registration Form</h1>
            <form className="row g-3">
                <div className="row-md-3">
                    <label htmfor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4"  onChange={handleUserEmail} />
                </div>
                <div className="row-md-3">
                    <label htmfor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" onChange={handleUserPassword} />
                </div>
                <div className="row-12">
                    <label htmfor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={handleUserAddress} />
                </div>
                <div className="row-12">
                    <label htmfor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={handleUserAdress2} />
                </div>
                <div className="row-md-6">
                    <label htmfor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" onChange={handleUserCity} />
                </div>
                <div className="row-md-4">
                    <label htmfor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option >select</option>
                        <option>Telangana</option>
                        <option>Andra pradesh</option>
                        <option>Kerala</option>
                    </select>
                </div>
                <div className="row-md-2">
                    <label htmfor="inputPincode" className="form-label">Pincode</label>
                    <input type="text" className="form-control" id="inputPincode" />
                </div>
                <div className="row-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="row-12">
                    <button  className="btn btn-primary" onClick={login}>Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Register
