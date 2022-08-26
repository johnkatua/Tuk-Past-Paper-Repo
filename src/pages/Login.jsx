import React from "react";

const Login = () => {
  return (
    <div className="auth--container">
      <div className="auth--container__card">
        <h3>Login</h3>
        <div>
          <input type='text' />
          <input type='text' />
        </div>
        <div>
          <input type='email' />
        </div>
        <div>
          <input type='password' />
        </div>
        <div>
          <button>
            Create an account
          </button>
        </div>
        <div>
          <span>Already have an account.</span>
          {" "}
          <span>Login Here</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
