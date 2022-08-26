import React from "react";

const Register = () => {
  return (
    <div className="auth--container">
      <div className="auth--container__card">
        <h3>Register</h3>
        <div className="auth--card__firstrow">
          <input type='text' />
          <input type='text' />
        </div>
        <div className="auth--card__secondrow">
          <input type='email' />
        </div>
        <div className="auth--card__thirdrow">
          <input type='password' />
        </div>
        <div>
          <button>
            Create an account
          </button>
        </div>
        <div>
          <span>Do not have an account.</span>
          {" "}
          <span>Register Here</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
