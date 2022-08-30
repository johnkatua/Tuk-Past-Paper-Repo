import React, { useEffect } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { CookiesProvider } from "react-cookie";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import "./App.css";
import Pages from "./pages/index";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { setToken, setUser } from "./features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get("token");
  const user = cookies.get("user");
  console.log('user', user)

  useEffect(() => {
    if (user && token) {
      dispatch(setToken(token));
      dispatch(setUser(user));
    }
  }, [token, user]);

  return (
    <CookiesProvider>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <Pages />
      </Worker>
    </CookiesProvider>
  );
};

export default App;
