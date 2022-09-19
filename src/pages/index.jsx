import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Cookies } from "react-cookie";
import Layout from "../components/Layout";
import Welcome from "./Welcome";
import "./index.css";
import Details from "./Details";
import PaperList from "./PaperList";
import Login from "./Login";
import Register from "./Register";
import FavoriteList from "./FavoriteList";
import { setUser } from "../features/auth/authSlice";

const cookies = new Cookies();

const user = cookies.get("token");

console.log(user);

const LayoutRoute = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Pages = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutRoute>
                <Welcome />
              </LayoutRoute>
            }
          />
          <Route
            path="/details"
            element={
              <LayoutRoute>
                <Details />
              </LayoutRoute>
            }
          />
          <Route
            path="/paper"
            element={
              <LayoutRoute>
                <PaperList />
              </LayoutRoute>
            }
          />
          <Route
            path="/login"
            element={
              <LayoutRoute>
                <Login />
              </LayoutRoute>
            }
          />
          <Route
            path="/register"
            element={
              <LayoutRoute>
                <Register />
              </LayoutRoute>
            }
          />
          <Route
            path="/favorite"
            element={
              <LayoutRoute>
                <FavoriteList />
              </LayoutRoute>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default Pages;
