import SignInUpLayout from "../Components/SignInUpLayout/SignInUpLayout";
import { useState } from "react";
import Button from "../Components/Button/Button";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
const VerifyOTP = () => {
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Your code was sent to you via email"
  );
  const [welcomeText, setWelcomeText] = useState("OTP Verification");
  const [buttonTxt, setButtonTxt] = useState("Verify");

  const [otp, setOtp] = useState("");

  return (
    <SignInUpLayout welcomeMessage={welcomeMessage} welcomeText={welcomeText}>
      <form>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          renderSeparator={<span style={{ width: "30px" }}></span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            border: "1px solid transparent",
            borderRadius: "8px",
            width: "54px",
            height: "54px",
            fontSize: "16px",
            color: "#000",
            fontWeight: "600",
            caretColor: "blue",
            backgroundColor: "#f2f2f2",
          }}
        />

        <Button label={buttonTxt} className="mt-6 w-full" />

        <p className="text-center mt-4">
          Didn't receive code?{" "}
          <Link
            to={"/signin"}
            className="text-blue-500  hover:text-blue-600 transition cursor-pointer"
          >
             Request again
          </Link>
        </p>
      </form>
    </SignInUpLayout>
  );
};

export default VerifyOTP;
