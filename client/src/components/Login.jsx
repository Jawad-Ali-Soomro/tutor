/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/login.scss";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { RiTwitterXLine, RiGithubLine, RiGoogleLine } from "react-icons/ri";

const Login = ({ onClose }) => {
    const [showPassword, setShowPassword] = useState(true)
  return (
    <div className="login-container flex" onClick={onClose}>
      <div className="login-wrapper flex col" onClick={(e) => e.stopPropagation()   }  >
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
            <input type={showPassword ? "text" : "Password"}  placeholder="Password" />
            <div className="icon flex" onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ? <FiEye />  : <FiEyeOff />
                }
            </div>
          </div>
          <div className="text flex">
            <p>Forgot Password?</p>
          </div>
          <div className="btn-blue flex">
            Login   
          </div>
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
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
