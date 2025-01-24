/* eslint-disable react/prop-types */
import "../styles/login.scss";

const Login = ({ onClose }) => {
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
            <input type="text" placeholder="Password" />
          </div>
          <div className="btn-blue flex">
            Login   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
