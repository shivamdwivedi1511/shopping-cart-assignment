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
        aria-label={placeholder}
      />
      <label htmlFor={name}> {placeholder} </label>
    </div>
  );
}
