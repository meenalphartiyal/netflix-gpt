import React from "react";
import Button from "../utils/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useSelector } from "react-redux";

const Header = ({ btn }) => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignIn = () => {
    navigate("/login");
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch(() => {
        navigate("/error");
      });
  };
  return (
    <div
      className="h-screen w-screen bg-cover bg-center absolte overflow-hidden"
      style={user ? {} : { backgroundImage: "url('/images/bg.jpg')" }}
    >
      {!user && <div className="absolute inset-0 bg-black/70"></div>}
      
      <div className="flex items-center justify-between mx-40 my-8 relative">
        <Link to={user ? "/browse" : "/"}>
          <img
            src="/images/title.png"
            className={user ? "w-[150px]" : "w-[200px]"}
            alt="NetflixGPT Icon"
          />
        </Link>
        {user && (
          <div className="flex justify-start items-center w-full text-sm font-semibold cursor-pointer">
            <h1 className="mx-4">Home</h1>
            <h1 className="mx-4">TV Shows</h1>
            <h1 className="mx-4">Movies</h1>
          </div>
        )}
        {btn && (
          <Button
            name="Sign In"
            onClick={handleSignIn}
            theme={{
              width: "80px",
              height: "30px",
              fontSize: "14px",
            }}
          />
        )}
        {user && (
          <Button
            name="Sign Out"
            onClick={handleSignOut}
            theme={{
              width: "80px",
              height: "30px",
              fontSize: "14px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
