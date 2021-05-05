import React from "react";
import Button from "../../Common/Buuton/Button";
import Input from "../../Common/Input/Input";
import { EMAIL, PASSWORD } from "../../Constants/regex";
import formHook from "../../Hooks/formHook";

export default function SignIn() {
  const [fields, setFields] = React.useState({
    firstName: {
      isRequired: true,
      requiredError: "Please enter the first name.",
      value: "",
      isMatching: false,
      matchError: "",
      error: "",
    },
    lastName: {
      isRequired: true,
      requiredError: "Please enter the last name.",
      value: "",
      isMatching: false,
      matchError: ".",
      error: "",
    },
    email: {
      isRequired: true,
      requiredError: "Please enter the email.",
      value: "",
      isMatching: EMAIL,
      matchError: "Invalid Email",
      error: "",
    },
    password: {
      isRequired: true,
      requiredError: "Please enter the password.",
      value: "",
      isMatching: PASSWORD,
      matchError: "Invalid password.",
      error: "",
    },
    confirmPassword: {
      isRequired: true,
      requiredError: "Please confirm the password.",
      value: "",
      isMatching: PASSWORD,
      matchError: "Invalid password.",
      sameAs: "password",
      sameAsError: "Password and confirm password are not same",
      error: "",
    },
  });

  const {
    validateInputs,
    onInputChange,
    onSubmitValidate,
    formActions,
  } = formHook({ setFields });

  const onSubmit = React.useCallback(
    (e, values) => {
      e.preventDefault();
     
      const error = onSubmitValidate(values);
      // if (!error) {
      //   history.push(WEB_PATH.HOME);
      // }
    },
    [validateInputs, history.push]
  );

  return (
    <div className="row auth-container">
      <div className="auth-heading">
        <div className="text-block">
          <h1> Signup </h1>
          <p> We do not share your personal details with anyone </p>
        </div>
      </div>
      <div className="auth-form">
        <form
          data-testid="form"
          method="post"
          action="#"
          autoComplete="off"
          onSubmit={(e) => onSubmit(e, { ...fields })}
        >
          <Input
            type="text"
            placeholder="First Name"
            maxLength={50}
            // required={true}
            name="firstName"
            onChange={(e) => onInputChange(e, fields.firstName)}
            value={fields.firstName.value}
            error={fields.firstName.error}
          />
          {console.log('filedss>', fields)}
          <Input
            type="text"
            maxLength={50}
            placeholder="Last Name"
            // required={true}
            name="lastName"
            onChange={(e) => onInputChange(e, fields.lastName)}
            value={fields.lastName.value}
            error={fields.lastName.error}
          />
          <Input
            maxLength={50}
            type="email"
            placeholder="Email"
            // required={true}
            name="email"
            onChange={(e) => onInputChange(e, fields.email)}
            value={fields.email.value}
            error={fields.email.error}
          />
          <Input
            maxLength={20}
            type="password"
            placeholder="Password"
            // required={true}
            name="password"
            onChange={(e) => onInputChange(e, fields.password)}
            value={fields.password.value}
            error={fields.password.error}
          />
          <Input
            maxLength={20}
            type="password"
            placeholder="Confirm Password"
            // required={true}
            name="confirmPassword"
            onChange={(e) => onInputChange(e, fields.confirmPassword)}
            value={fields.confirmPassword.value}
            error={fields.confirmPassword.error}
          />
          <Button
            text={"Signup"}
            type="submit"
            disabled={formActions.isSubmitting || formActions.hasErrors}
          />
        </form>
      </div>
    </div>
  );
}
