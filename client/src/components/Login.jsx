/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/login.scss";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { RiGithubLine, RiGoogleLine, RiTwitterXLine } from "react-icons/ri";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { PiStudentLight } from "react-icons/pi";
import { SlCloudUpload } from "react-icons/sl";

const Login = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showRole, setShowRole] = useState(false);
  const [selectedRole, selectRole] = useState("buy");
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <div className="login-container flex" onClick={onClose}>
      {!showRole && !showRegistration && (
        <div
          className="login-wrapper flex col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="img-sect flex">
            <img src="/logo.png" alt="" />
          </div>
          <h2>
            Let's <span>Read</span>
          </h2>
          <div className="form flex col">
            <div className="input-wrapper flex">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="input-wrapper flex">
              <input
                type={showPassword ? "text" : "Password"}
                placeholder="Password"
              />
              <div
                className="icon flex"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>
            <div className="text flex">
              <p>Forgot Password?</p>
            </div>
            <div className="btn-blue flex">Login</div>
            <div className="text-center flex">
              <p>OR</p>
            </div>
            <div className="icons-reg flex">
              <div className="icon flex">
                <RiGoogleLine />
              </div>
              <div className="icon flex">
                <RiGithubLine />
              </div>
              <div className="icon flex">
                <RiTwitterXLine />
              </div>
              <button onClick={() => setShowRole(true)}>Register</button>
            </div>
          </div>
        </div>
      )}
      {showRole && (
        <div
          className="login-wrapper  flex col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="img-sect flex">
            <img src="/logo.png" alt="" />
          </div>
          <h2>
            Let's <span>Choose</span> Your Role.
          </h2>
          <div className="choosing-cards flex">
            <div
              className="card flex col"
              style={{
                background: selectedRole == "buy" ? "royalblue" : "",
                color: selectedRole == "buy" ? "white" : "",
              }}
              onClick={() => selectRole("buy")}
            >
              <BiPurchaseTagAlt />
              <h2>Buy.</h2>
            </div>
            <div
              className="card flex col"
              style={{
                background: selectedRole == "sell" ? "royalblue" : "",
                color: selectedRole == "sell" ? "white" : "",
              }}
              onClick={() => selectRole("sell")}
            >
              <HiOutlineBuildingStorefront />
              <h2>Sell.</h2>
            </div>
            <div
              className="card flex col"
              style={{
                background: selectedRole == "bargain" ? "royalblue" : "",
                color: selectedRole == "bargain" ? "white" : "",
              }}
              onClick={() => selectRole("bargain")}
            >
              <PiStudentLight />
              <h2>Bargain.</h2>
            </div>
          </div>
          <div
            className="btn-next flex"
            onClick={() => setShowRegistration(true) + setShowRole(false)}
          >
            NEXT
          </div>
        </div>
      )}
      {!showRole && showRegistration && (
        <div className="login-wrapper flex col" onClick={(e) => e.stopPropagation()}>
          <div className="img-sect flex">
            <img src="/logo.png" alt="" />
          </div>
          <h2>
            Let's <span>Create</span> An Account
          </h2>
          <div className="form flex col">
            {selectedRole != "sell" && (
              <div className="input-wrapper flex">
                <input type="text" placeholder="Username" />
              </div>
            )}
            {selectedRole == "sell" && (
              <div className="input-wrapper flex">
                <input type="text" placeholder="Store Name" />
              </div>
            )}
            <div className="input-wrapper flex">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="input-wrapper flex">
              <input
                type={showPassword ? "text" : "Password"}
                placeholder="Password"
              />
              <div
                className="icon flex"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>
              <div className="upload-sect flex col">
                <SlCloudUpload />
                <p>Upload {selectedRole == 'sell' ? "Shop Logo" : "Avatar"}</p>
              </div>

            <div className="btn-blue flex">Register</div>
          
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
