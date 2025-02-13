import { ReactNode } from "react";
import Logo from "../Logo/Logo";

const SignInUpLayout = ({ children, welcomeText, welcomeMessage  }: { children: ReactNode, welcomeText : string, welcomeMessage : string }) => {
  return (
    <div className="bg-black  h-screen w-screen flex flex-col gap-5 justify-center items-center">
      <div className="bg-white px-8 py-6 rounded-lg sm:w-[30%]">
        <Logo className="" />
        <hr className="h-[.1rem]   border-0 rounded-sm  bg-gray-200 mt-1 mb-1"/>
        <h1 className=" text-3xl mb-2">{welcomeText}</h1>
        <h1 className="  mb-6">{welcomeMessage}</h1>
        {children}
      </div>
    </div>
  );
};

export default SignInUpLayout;
