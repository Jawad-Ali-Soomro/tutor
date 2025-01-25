/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/header.scss";
import { GiBlackBook } from "react-icons/gi";
import { RiSearch2Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const onClose = () => {
    setShowLogin(false);
  };
  const tab = window.location.pathname;
  return (
    <div className="header-container flex bw">
      <div className="logo flex" onClick={() => navigate("/")}>
        <img src="/logo.png" alt="" />
      </div>
      <div className="navs-right flex">
        <div className="navs-main flex">
          <ul className="flex">
            <li className={tab == "/" ? "active" : ""}>Home</li>
            <li>
              Books <span>New</span>
            </li>
            <li>About</li>
            <li>
              Blogs <span>Latest</span>
            </li>
            <li>
              Developer <span style={{ marginLeft: "20px" }}>API</span>
            </li>
          </ul>
        </div>
        <div className="icons flex">
          {/* <div className="icon flex">
            <RiSearch2Line />
          </div> */}
          <div className="icon flex">
            <IoNotificationsOutline />
          </div>
          <div className="btn-login flex" onClick={() => setShowLogin(true)}>
            LOGIN
          </div>
        </div>
      </div>
      {showLogin && <Login onClose={onClose} />}
    </div>
  );
};

export default Header;
