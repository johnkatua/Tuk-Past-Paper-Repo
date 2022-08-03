import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Welcome from "./Welcome";
import "./index.css";
import Details from "./Details";

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
        </Routes>
      </Router>
    </Suspense>
  );
};

export default Pages;
