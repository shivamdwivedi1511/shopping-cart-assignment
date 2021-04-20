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
            maxLength={50}
            required={true}
            name="firstname"
          />
          <Input
            type="text"
            maxLength={50}
            placeholder="Last Name"
            required={true}
            name="lastname"
          />
          <Input
            maxLength={50}
            type="email"
            placeholder="Email"
            required={true}
            name="email"
          />
          <Input
            maxLength={20}
            type="password"
            placeholder="Password"
            required={true}
            name="password"
          />
          <Input
            maxLength={20}
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
