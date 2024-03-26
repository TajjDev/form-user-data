
import React, { useState } from 'react';
import "./Form.css"

export default function Form({ formSubmit }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const Username=()=>{
    if (formData.username == "") {
      return <p>Username is required* </p>

}
  }
 const Email=()=>{
  if (formData.email == "") {
      return <p>Email is required*</p>
  }
 }
 const Password=()=>{
  if (formData.password == "") {
      return <p>Password is required*</p>
  }
 }
 const HandleSubmit = (event) => {event.preventDefault();
    console.log(formData);
    if (formData.username && formData.email != "" && formData.password != "" ) {
      
     formSubmit(formData)
    }
    
  };

 const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name] : value,
    }));
  };



  return (
    
    <div>
      <form id="container" onSubmit={HandleSubmit}>
        <input type="text" placeholder="username" name="username" value={formData.username} onChange={handleChange} />
        <Username/> 
        <input type="email" placeholder="email" value={formData.email} onChange={handleChange} name="email" />
        <Email/>
        <input type="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} />
        <Password/>
        <button >Submit</button>
      </form>
    </div>
  );
}

