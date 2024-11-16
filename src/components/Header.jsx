import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      // Cleanup
      unsubscribe();
    };
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-20 flex justify-between items-center p-5">
      <img className="w-48 mx-5" src={LOGO} alt="netflix-logo" />

      {user ? (
        <div className="flex items-center">
          <span className="text-white mr-10 font-medium">Hi {user.email}</span>
          <button
            onClick={handleSignOut}
            className="py-2 px-4 bg-red-700 rounded-sm font-medium"
          >
            Sign Out
          </button>
        </div>
      ) : (
        // If user is not logged in, no email is shown and Sign-In button could be added here
        <button
          onClick={() => navigate("/login")}
          className="py-2 px-4 bg-blue-600 text-white rounded-sm font-medium"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Header;
