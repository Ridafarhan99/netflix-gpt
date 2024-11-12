import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
          alt="background-image"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-32 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-md">
        <h1 className="text-3xl py-4 font-bold text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            type="text"
            placeholder="Full Name"
            className="font-normal text-white p-2 my-2 w-full bg-gray-800 rounded-sm opacity-85"
            required
          />
        ) : (
          ""
        )}

        {!isSignInForm ? (
          <input
            type="text"
            placeholder="Mobile Number"
            className="font-normal text-white p-2 my-2 w-full bg-gray-800 rounded-sm opacity-85"
          />
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="Email"
          className="font-normal text-white p-2 my-2 w-full bg-gray-800 rounded-sm opacity-85"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="font-normal text-white p-2 my-2 w-full bg-gray-800 rounded-sm opacity-85"
        />
        <button className="py-2 my-4 bg-red-700 w-full rounded-sm font-medium">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div
          className="pt-6 font-extralight cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already registered? Sign in Now"}
        </div>
      </form>
    </div>
  );
};

export default Login;
