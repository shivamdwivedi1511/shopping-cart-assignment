import React from "react";
import "./Input.scss";

export default function Input({ type, placeholder, required, name }) {
  return (
    <div className="field">
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        placeholder={placeholder}
      />
      <label htmlFor={name}> {placeholder} </label>
    </div>
  );
}
