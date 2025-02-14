import SignInUpLayout from "../Components/SignInUpLayout/SignInUpLayout"
import Input from "../Components/Input/Input"
import { useState } from "react";
import Button from "../Components/Button/Button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [welcomeMessage, setWelcomeMessage] = useState("Enter your email and we'll send you a link to reset your password.");
    const [welcomeText, setWelcomeText] = useState("Forgot Password");
    const [buttonTxt, setButtonTxt] = useState("Send Email")

  return (
    <SignInUpLayout welcomeMessage={welcomeMessage} welcomeText={welcomeText}>
      <form>
        
        <Input
          label="Email/Username"
          type="text"
          value=""
          placeholder="Enter you email/username"
          onChange={() => {}}
          className=""
        />
        
        
        <Button label={buttonTxt} className="mt-6 w-full" />

        <p className="text-center mt-4">
          Back to{" "}
          <Link to={'/signin'} className="text-blue-500  hover:text-blue-600 transition cursor-pointer">
            Sign in
          </Link>
        </p>
        
      </form>
    </SignInUpLayout>
  )
}

export default ForgotPassword
