import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Welcome from "./Welcome";
import "./index.css";
import Details from "./Details";
import PaperList from "./PaperList";
import Login from "./Login";

const LayoutRoute = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Pages = () => {
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
        </Routes>
      </Router>
    </Suspense>
  );
};

export default Pages;
