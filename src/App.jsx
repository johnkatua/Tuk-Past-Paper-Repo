import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import "./App.css";
import Pages from "./pages/index";
import '@react-pdf-viewer/core/lib/styles/index.css';

const App = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
      <Pages />
    </Worker>
  );
};

export default App;
