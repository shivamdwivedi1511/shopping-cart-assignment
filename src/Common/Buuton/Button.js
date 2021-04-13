import React from "react";
import "./Button.scss";

export default function Button({ text, className, ...rest }) {
  return (
    <button className={`button ${className}`} {...rest}>
      {text}
    </button>
  );
}
