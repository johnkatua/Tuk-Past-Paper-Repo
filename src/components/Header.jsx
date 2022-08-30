import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cookies } from "react-cookie";
import Tooltip from "./Tooltip";
import { closeToolTip, openToolTip } from "../features/tooltip/toolTip";
import { setToken, setUser } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { showToolTip } = useSelector((state) => state.toolTip);
  const navigate = useNavigate();

  const cookies = new Cookies();

  const token = cookies.get("token");
  const userData = cookies.get("user");
  console.log('user', userData)
  console.log('user', user);

  // useEffect(() => {
  //   if (user && token) {
  //     dispatch(setToken(token));
  //     dispatch(setUser(user));
  //   }
  // }, [token, user]);
  

  const handleToolTip = () => {
    if (showToolTip) {
      dispatch(closeToolTip());
    } else {
      dispatch(openToolTip());
    }
  };

  const handleLogout = () => {
    cookies.remove("token");
    cookies.remove("user");
    window.location.reload(false);
  };

  useEffect(() => {
    if (userData && token) {
      dispatch(setToken(token));
      dispatch(setUser(userData));
    }
    if (location.pathname == "/login" || location.pathname == "/register") {
      setCurrentLocation(true);
    } else if (location.pathname == "/") {
      setCurrentLocation(false);
    }
  }, [currentLocation, location, user, token]);

  return (
    <div className="header--container">
      <h1 onClick={() => navigate("/")}>Tuk Past Past Repo</h1>
      {showToolTip && <Tooltip logout={handleLogout} />}
      {user ? (
        <div onClick={handleToolTip}>{user}</div>
      ) : (
        <>
          {currentLocation === false ? (
            <div className="header--btns">
              <button
                className="header--btns__login"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="header--btns__register"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Header;
