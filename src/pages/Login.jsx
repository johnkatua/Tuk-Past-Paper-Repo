import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="auth--container">
      <div className="auth--container__card">
        <h3>Login</h3>
        <div className="auth--card__secondrow">
          <input type='email' placeholder="Enter your email address" />
        </div>
        <div className="auth--card__thirdrow">
          <input type='password' placeholder="Enter password" />
        </div>
        <div className="auth--btn__container">
          <button>
            Login
          </button>
        </div>
        <div>
          <span>Do not have an account.</span>
          {" "}
          <span className="auth--nav__link" onClick={() => navigate('/register')}>Register Here</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
