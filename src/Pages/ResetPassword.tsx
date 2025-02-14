import SignInUpLayout from "../Components/SignInUpLayout/SignInUpLayout";
import { useState } from "react";
import Button from "../Components/Button/Button";
import { Link } from "react-router-dom";
import Input from "../Components/Input/Input";
const ResetPassword = () => {
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Create a new password. Ensure it differs from previous ones for security"
  );
  const [welcomeText, setWelcomeText] = useState("Reset Password");
  const [buttonTxt, setButtonTxt] = useState("Update Password");

  const [otp, setOtp] = useState("");

  return (
    <SignInUpLayout welcomeMessage={welcomeMessage} welcomeText={welcomeText}>
      <form>
        <Input
          label="New Password"
          type="password"
          value=""
          placeholder="Enter new password"
          onChange={() => {}}
          className=""
        />
        <Input
          label="Confirm Password"
          type="password"
          value=""
          placeholder="Enter confirm password"
          onChange={() => {}}
          className=""
        />

        <Button label={buttonTxt} className="mt-6 w-full" />

      </form>
    </SignInUpLayout>
  );
};

export default ResetPassword;
