import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";
import SignInUpLayout from "../Components/SignInUpLayout/SignInUpLayout";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import GoogleButton from "../Components/Button/GoogleButton";

const AuthPage = () => {
  const [authPage, setAuthPage] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [welcomeText, setWelcomeText] = useState("");
  const [signinBtn, setSigninBtn] = useState("Get Started");

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    setAuthPage(path);
    if (path === "/signin") {
      setWelcomeMessage("Sign in to continue your secret conversations");
      setWelcomeText("Welcome Back");
    } else {
      setWelcomeMessage("Sign up to start your anonymous adventur");
      setWelcomeText("Join");
    }
  }, [path]);

  return path === "/signin" ? (
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
        <Input
          label="Password"
          type="password"
          value=""
          placeholder="Enter your password"
          onChange={() => {}}
          className=""
        />
        <div className="text-right mt-2 text-blue-500  hover:text-blue-600 transition cursor-pointer">
          Forgot password?
        </div>
        <Button label={signinBtn} className="mt-4 w-full" />
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span className="text-blue-500  hover:text-blue-600 transition cursor-pointer">
            Sign Up
          </span>
        </p>
        <p className="text-center mt-4">Or With</p>

        <GoogleButton/>
      </form>
    </SignInUpLayout>
  ) : (
    <SignInUpLayout welcomeMessage={welcomeMessage} welcomeText={welcomeText}>
      <h1>Arpit</h1>
    </SignInUpLayout>
  );
};

export default AuthPage;
