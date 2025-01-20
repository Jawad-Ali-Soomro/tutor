/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/header.scss";
import { GiBlackBook } from "react-icons/gi";
import { RiSearch2Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
    const tab = window.location.pathname
  return (
    <div className="header-container flex bw">
      <div className="logo flex">
        <div className="logo-icon flex">
          <GiBlackBook />
        </div>
        {/* <p>Tutor.</p> */}
      </div>
      <div className="navs-right flex">
        <div className="navs-main flex">
          <ul className="flex">
            <li className={tab == '/' ? "active" : ""}>Home</li>
            <li>
              Books <span>NEW</span>
            </li>
            <li>About Us</li>
            <li>
              BLogs <span>Latest</span>
            </li>
          </ul>
        </div>
        <div className="icons flex">
          <div className="icon flex">
            <RiSearch2Line />
          </div>
          <div className="icon flex">
            <IoNotificationsOutline />
          </div>
        </div>
        {/* <div className="btn-login flex">
            LOGIN
        </div> */}
      </div>
    </div>
  );
};

export default Header;
