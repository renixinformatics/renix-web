import React from "react";
import "./Input.css";

function Input(props) {
  const handleChange=(e)=>{
    props.handleChange(e.target.name,e.target.value)
  }
  return (
    <div className="form-section">
      <div className="label-section">{props.labelName}
      <span className="starRed">*</span>
      </div>
      <div className="label-input">
        <input
          class="form-control"
          type={props.type}
          placeholder={props.placeholder}
          name={props.labelName}
          onChange={(e)=>handleChange(e)}
          aria-label="default input example"
          required
        ></input>
      </div>
    </div>
  );
}

export default Input;
