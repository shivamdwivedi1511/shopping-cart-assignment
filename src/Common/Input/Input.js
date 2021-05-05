import React from "react";
import "./Input.scss";

export default function Input({
  type,
  placeholder,
  required,
  maxLength,
  name,
  id,
  label,
  onChange,
  value,
  error,
  className,
}) {
  console.log("values>>", value);

  return (
    <>
      <div className="field">
        <input
          type={type}
          name={name}
          id={id || name}
          maxLength={maxLength}
          required={required}
          placeholder={placeholder}
          aria-label={placeholder}
          className="floating-label-field"
          onChange={onChange}
          value={value}
        />
        <label htmlFor={name}> {placeholder} </label>
      </div>
      {error && <span className="error-help">{error}</span>}
    </>
  );
}
