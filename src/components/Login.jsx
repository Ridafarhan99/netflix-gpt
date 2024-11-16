import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import googleLogo from "../logo/7123025_logo_google_g_icon.png";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignBtn = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign-Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current ? name.current.value : "",
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch(() => {
          setErrorMessage("Something went wrong, please try again!");
        });
    } else {
      // Sign-In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // Signed in
        })
        .catch(() => {
          setErrorMessage("Invalid email or password");
        });
    }
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const { uid, email, displayName, photoURL } = result.user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      })
      .catch(() => {
        setErrorMessage("Google Sign-In failed. Please try again.");
      });
  };

  return (
    <div>
      <Header />
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg")`,
        }}
      ></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 p-12 bg-black my-32 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-md"
      >
        <h1 className="text-3xl py-4 font-bold text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="font-normal text-white p-2 my-2 w-full bg-gray-800 rounded-sm opacity-85"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="font-normal text-white p-2 my-2 w-full bg-gray-800 rounded-sm opacity-85"
          required
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="font-normal text-white p-2 my-2 w-full bg-gray-800 rounded-sm opacity-85"
        />

        <p className="text-red-600 font-thin">{errorMessage}</p>

        <button
          className="py-2 my-4 bg-red-700 w-full rounded-sm font-medium"
          onClick={handleSignBtn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <button
          className="flex items-center justify-center py-2 my-4 bg-blue-600 w-full rounded-sm font-medium text-white"
          onClick={handleGoogleSignIn}
        >
          <img
            src={googleLogo}
            alt="Google Logo"
            className="w-6 h-6 mr-2" // Adjust the size and margin as needed
          />
          {isSignInForm ? "Sign In" : "Sign Up"} with Google
        </button>

        <div
          className="pt-6 font-extralight cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Cineflix? Sign Up now"
            : "Already registered? Sign in Now"}
        </div>
      </form>
    </div>
  );
};

export default Login;
