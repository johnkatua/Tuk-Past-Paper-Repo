import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../features/auth/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state.auth);
  console.log('user', auth);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const set = name => {
    return (e) => {
      setUser({ ...user, [name]: e.target.value })
    }
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, password } = user;
    dispatch(userRegister({ firstName, lastName, email, password }));
  }

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
