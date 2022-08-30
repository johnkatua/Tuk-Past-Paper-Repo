import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, error, status } = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const set = (name) => {
    return (e) => {
      setUser({ ...user, [name]: e.target.value });
    };
  };

  const handleSubmit = (e) => {
    const { email, password } = user;
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="auth--container">
      <div className="auth--container__card">
        <h3>Login</h3>
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
            Login
          </button>
        </div>
        <div>
          <span>Do not have an account.</span>{" "}
          <span
            className="auth--nav__link"
            onClick={() => navigate("/register")}
          >
            Register Here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
