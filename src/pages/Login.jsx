import React from "react";

const Login = () => {
  return (
    <div className="auth--container">
      <div className="auth--container__card">
        <h3>Login</h3>
        <div className="auth--card__secondrow">
          <input type='email' />
        </div>
        <div className="auth--card__thirdrow">
          <input type='password' />
        </div>
        <div className="auth--btn__container">
          <button>
            Login
          </button>
        </div>
        <div>
          <span>Already have an account.</span>
          {" "}
          <span className="auth--nav__link">Login Here</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
