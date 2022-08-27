import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="auth--container">
      <div className="auth--container__card">
        <h3>Register</h3>
        <div className="auth--card__firstrow">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="auth--card__secondrow">
          <input type="email" placeholder="Enter your email address" />
        </div>
        <div className="auth--card__thirdrow">
          <input type="password" placeholder="Enter password" />
        </div>
        <div className="auth--btn__container">
          <button>Create an account</button>
        </div>
        <div>
          <span>Already have an account.</span>{" "}
          <span className="auth--nav__link" onClick={() => navigate("/login")}>
            Login Here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
