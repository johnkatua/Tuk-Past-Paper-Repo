import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import "./App.css";
import Pages from "./pages/index";

const App = () => {
  return (
    <Worker>
      <Pages />
    </Worker>
  );
};

export default App;
