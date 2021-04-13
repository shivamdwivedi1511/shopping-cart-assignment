import React from "react";
import Button from "../../Common/Buuton/Button";
import Input from "../../Common/Input/Input";
import "./SignUp.scss";

export default function SignUp() {
  return (
    <div className="row auth-container">
      <div className="auth-heading">
        <div className='text-block'>
          <h1> Login </h1>
          <p> Get access to your Orders, Wishlist and Recommendations </p>
        </div>
      </div>
      <div className="auth-form">
        <form>
          <Input
            type="email"
            placeholder="Email"
            required={true}
            name="email"
          />
          <Input
            type="password"
            placeholder="Password"
            required={true}
            name="password"
          />
          <Button text={"Login"} />
        </form>
      </div>
    </div>
  );
}
