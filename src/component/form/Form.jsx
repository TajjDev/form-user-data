
import React, { useState } from 'react';
import "./Form.css"

export default function Form({ formSubmit}) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

 const HandleSubmit = (e) => {
  e.preventDefault();
    console.log(formData);
    if (formData.username && formData.email && formData.password != "" ) {
     formSubmit(formData) 

    } }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name] : value,
    }));
  };
  const auth1 = ()=>{
    if (formData.username === "") {
      document.getElementById("onee").innerHTML="",
      document.getElementById("o").style.borderColor= "transparent"
    }
  }
  const auth2 = ()=>{
    if (formData.email === "") {
      document.getElementById("twoo").innerHTML="",
      document.getElementById("t").style.borderColor= "transparent"
    }
  }
  const auth3 = ()=>{
    if (formData.password === "") {
      document.getElementById("threee").innerHTML="",
      document.getElementById("th").style.borderColor= "transparent"
    }
  }

const auth = ()=>{
    if (formData.username === "") {
      document.getElementById("onee").innerHTML="Username can't be empty"
      document.getElementById("onee").style.color="red"
      document.getElementById("oo").style.borderColor= "red"
    }
    else{
      document.getElementById("onee").innerHTML=""
      document.getElementById("oo").style.borderColor= "transparent"
    }
    if (formData.email === "") {
      document.getElementById("twoo").innerHTML="Email can't be empty"
      document.getElementById("twoo").style.color="red"
      document.getElementById("t").style.borderColor= "red"
    }
    else{
      document.getElementById("twoo").innerHTML=""
      document.getElementById("t").style.borderColor= "transparent"
    }
    if (formData.password === "") {
      document.getElementById("threee").innerHTML="Password can't be empty"
      document.getElementById("threee").style.color="red"
      document.getElementById("th").style.borderColor= "red"
    }
    else{
      document.getElementById("threee").innerHTML=""
      document.getElementById("th").style.borderColor= "transparent"
    }
}


  return (
    
    <div>
      <form id="container" onSubmit={HandleSubmit}>
        <input id='oo'
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={(e)=>{handleChange(e), auth1()}}
          
        />
        <p id="onee"></p>
        <input id='t'
          type="email"
          placeholder="email"
          value={formData.email}
          onChange={(e)=>{handleChange(e), auth2()}}
          name="email"
        />
        <p id="twoo"></p>
        <input id='th'
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={(e)=>{handleChange(e), auth3()}}
        />
        <p id="threee"></p>
        <button onClick={auth}>Submit</button>
      </form>
    </div>
  );
}

