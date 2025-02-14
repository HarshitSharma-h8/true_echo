import React from "react";
import Image from "../assets/404-error.png";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <div className="bg-black text-white h-screen w-screen  flex items-center justify-center">
      <div className="flex flex-col justify-between items-center">
        <img src={Image} alt="404" className="w-[150px]  "/>
        <h1 className="mt-4 text-lg">Page Not Found</h1>
        <p className="mt-2">Sorry, the page you're looking for doesn't exist.</p>
      <Link to={'/'} className=" mt-4 bg-white text-black px-4 py-2 rounded-lg hover:scale-105 transition duration-200 ease-in-out"> Back to Home</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
