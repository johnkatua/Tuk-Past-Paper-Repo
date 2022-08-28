import React, { useEffect } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { CookiesProvider } from "react-cookie";
import { Cookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Pages from "./pages/index";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { setToken } from "./features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get('token')

  useEffect(() => {
    dispatch(setToken(token));
  }, [token]);
  
  return (
    <CookiesProvider>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <Pages />
      </Worker>
    </CookiesProvider>
  );
};

export default App;
