import React from "react";
import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // instead of having const how btnnameReact is updated -> this is because every when the header function call it will create a new instance of btnname react
  // console.log("header render")
  // shortcut fro emojis: windoe key+;
  const OnlineStatus = useOnlineStatus();

  const {loggedIn }= useContext(UserContext)
  console.log(loggedIn)
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg  sm:bg-yellow-100 lg:bg-green-100 m-1">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status: {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <button 
            className="login px-4" 
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
