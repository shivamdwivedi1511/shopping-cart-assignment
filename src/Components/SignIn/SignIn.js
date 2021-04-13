import React from "react";
import Button from "../../Common/Buuton/Button";
import Input from "../../Common/Input/Input";

export default function SignIn() {
  return (
    <div className="row auth-container">
      <div className="auth-heading">
        <div className="text-block">
          <h1> Signup </h1>
          <p> We do not share your personal details with anyone </p>
        </div>
      </div>
      <div className="auth-form">
        <form>
          <Input
            type="text"
            placeholder="First Name"
            required={true}
            name="firstname"
          />
          <Input
            type="text"
            placeholder="Last Name"
            required={true}
            name="lastname"
          />
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
          <Input
            type="password"
            placeholder="Confirm Password"
            required={true}
            name="confirmpassword"
          />
          <Button text={"Signup"} />
        </form>
      </div>
    </div>
  );
}
