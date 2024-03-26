import React, { useState } from 'react';
import './Show.css';
import Form from '../form/Form';
import List from '../showOutput/ShowOutput';
export default function Show() {
  const [formList, setFormList] = useState([]);
  const handleFormSubmit = (formData) => {
    setFormList((prevData) => [...prevData, formData]);
  };

  return (
    <div className="container">
      <Form formSubmit={handleFormSubmit} />
      <List formInfo={formList}/>
    </div>
  );
}