import React from 'react'

function Dashboardtwo() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    let arr = [{}];
    let signup = () => {
        var name = document.getElementById("exampleInputUserName");
        arr.push(name);
        var password = document.getElementById("exampleInputUserName");
        arr.push(password);
        var age = document.getElementById("exampleInputage");
        arr.push(age);
        var mobileNumber = document.getElementById("exampleInputMobile");
        arr.push(mobileNumber);
        console.log(arr);

        const handleUserName = (e) => {
            setName(e.target.value);

        };
        const handleUserPassword = (e) => {
            setPassword(e.target.value);
        };
        const handleUserage = (e) => {
            setAge(e.target.value);
        };
        const handleUsermobileNumber = (e) => {
            setMobileNumber(e.target.value);
        };

        return (
            <div>
    
            </div>
        )
    }

    export default Dashboardtwo
