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
    <img src="/logo.png" alt="" />
   </div>
      <div className="navs-right flex">
        <div className="navs-main flex">
          <ul className="flex">
            <li className={tab == '/' ? "active" : ""}>Home</li>
            <li>
              Books <span>New</span>
            </li>
            <li>About Us</li>
            <li>
              Blogs <span>Latest</span>
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
