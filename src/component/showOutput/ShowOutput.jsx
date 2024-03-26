
import React from 'react';
import "./ShowOutput.css"
export default function ShowOutput({ formInfo}) {
    
  return (
    <>
      <div className="list">
        {formInfo.map((data, index) => (
          <div className="lists" key={index}>
            <h4>Name: {data.username} </h4>
            <h4>Email: {data.email}</h4>
            <h4>Password:{data.password}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
