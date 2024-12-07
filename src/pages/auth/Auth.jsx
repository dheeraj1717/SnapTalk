import React, { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
const Auth = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className="flex w-screen h-screen">
      <div className="flex h-screen w-[80%] xl:w-[60%] max-h-[600px] m-auto  shadow-lg rounded-md overflow-hidden relative">
        <LogIn />
        <div
          className={`w-1/2 bg-primaryBlue h-full flex flex-col items-center justify-center gap-3 z-10 transition-all duration-500 absolute ${
            isSignUpOpen ? "" : "translate-x-full"
          }`}
        >
          <h1 className="text-4xl font-bold text-white tracking-wide">
            Hello Friend!
          </h1>
          <p className="text-gray-50">
            Join us and start chatting with your friends
          </p>
          <button
            type="submit"
            className="mt-5 w-1/3 border-2 hover:transition-colors duration-300 p-2  rounded-full text-white font-semibold"
            onClick={() => setIsSignUpOpen(!isSignUpOpen)}
          >
            {isSignUpOpen ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default Auth;
