import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cookies } from "react-cookie";
import Tooltip from "./Tooltip";
import { closeToolTip, openToolTip } from "../features/tooltip/toolTip";
import { getUserProfile } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { showToolTip } = useSelector((state) => state.toolTip);
  const token = localStorage.getItem("token");

  const handleToolTip = () => {
    if (showToolTip) {
      dispatch(closeToolTip());
    } else {
      dispatch(openToolTip());
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  useEffect(() => {
    if (token) {
      dispatch(getUserProfile());
    }
    if (location.pathname == "/login" || location.pathname == "/register") {
      setCurrentLocation(true);
    } else if (location.pathname == "/") {
      setCurrentLocation(false);
    }
  }, [currentLocation, location, close, token]);

  return (
    <div className="header--container">
      <h1 onClick={() => navigate("/")}>Tuk Past Past Repo</h1>
      {showToolTip && <Tooltip logout={handleLogout} />}
      {user ? (
        <div onClick={handleToolTip}>{user.email}</div>
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
