import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { CookiesProvider } from "react-cookie";
import { useSelector } from "react-redux";
import "./App.css";
import Pages from "./pages/index";
import "@react-pdf-viewer/core/lib/styles/index.css";

const App = () => {
  const { token } = useSelector(state => state.auth);
  console.log(token);
  return (
    <CookiesProvider>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <Pages />
      </Worker>
    </CookiesProvider>
  );
};

export default App;
