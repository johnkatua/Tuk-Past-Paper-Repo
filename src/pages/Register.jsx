import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../features/auth/authSlice";
import ReusableSpinner from "../components/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, token } = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const set = (name) => {
    return (e) => {
      setUser({ ...user, [name]: e.target.value });
    };
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, password } = user;
    dispatch(userRegister({ firstName, lastName, email, password }));
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
    if (status === 'succeeded') {
      navigate('/')
    }
  }, [token, status]);

  return (
    <div className="auth--container">
      <div className="auth--container__card">
        <h3>Register</h3>
        <div className="auth--card__firstrow">
          <input
            type="text"
            placeholder="First Name"
            onChange={set("firstName")}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={set("lastName")}
          />
        </div>
        <div className="auth--card__secondrow">
          <input
            type="email"
            placeholder="Enter your email address"
            onChange={set("email")}
          />
        </div>
        <div className="auth--card__thirdrow">
          <input
            type="password"
            placeholder="Enter password"
            onChange={set("password")}
          />
        </div>
        <div className="auth--btn__container">
          <button type="submit" onClick={handleSubmit}>
            {status === "loading" ? <ReusableSpinner /> : "Create an account"}
          </button>
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
