import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Welcome from "./Welcome";
import "./index.css";
import Details from "./Details";
import PaperList from "./PaperList";
import Login from "./Login";
import Register from "./Register";
import FavoriteList from "./FavoriteList";
import AdminLayout from "../components/AdminLayout";
import PaperPage from "./Admin/Paper";
import FacultyPage from "./Admin/Faculties";
import CoursePage from "./Admin/Courses";

const LayoutRoute = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const AdminDashboardRoute = ({ children }) => {
  return <AdminLayout>{children}</AdminLayout>;
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
          <Route
            path="/admin-dashboard"
            element={
              <AdminDashboardRoute>
                <FacultyPage />
              </AdminDashboardRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <AdminDashboardRoute>
                <CoursePage />
              </AdminDashboardRoute>
            }
          />
          <Route
            path="/admin-papers"
            element={
              <AdminDashboardRoute>
                <PaperPage />
              </AdminDashboardRoute>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default Pages;
