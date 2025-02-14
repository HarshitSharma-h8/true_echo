import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
import { useLocation, Link } from "react-router-dom";
import SignInUpLayout from "../Components/SignInUpLayout/SignInUpLayout";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import GoogleButton from "../Components/Button/GoogleButton";

const AuthPage = () => {
  const [authPage, setAuthPage] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [welcomeText, setWelcomeText] = useState("");
  const [signinBtn, setSigninBtn] = useState("Get Started");
  const [signunBtn, setSignunBtn] = useState("Register");

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
        <Link to={'/forgot-password'} className="text-right  block mt-2 text-blue-500  hover:text-blue-600 transition cursor-pointer">
          Forgot password?
        </Link>
        <Button label={signinBtn} className="mt-4 w-full" />
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to={'/signup'} className="text-blue-500  hover:text-blue-600 transition cursor-pointer">
            Sign Up
          </Link>
        </p>
        <p className="text-center mt-2 mb-2">Or With</p>

        <GoogleButton label="Sign in"/>
      </form>
    </SignInUpLayout>
  ) : (
    <SignInUpLayout welcomeMessage={welcomeMessage} welcomeText={welcomeText}>
      <form>
        <Input
          label="Username"
          type="text"
          value=""
          placeholder="Enter you email/username"
          onChange={() => {}}
          className=""
        />
        <Input
          label="Email"
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
        
        <Button label={signunBtn} className="mt-6 w-full" />
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to={'/signin'} className="text-blue-500  hover:text-blue-600 transition cursor-pointer">
            Sign In
          </Link>
        </p>
        <p className="text-center mt-2 mb-2">Or With</p>

        <GoogleButton label="Sign up"/>
      </form>
    </SignInUpLayout>
  );
};

export default AuthPage;
