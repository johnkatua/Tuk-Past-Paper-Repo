import { useEffect } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { useDispatch } from "react-redux";
import "./App.css";
import Pages from "./pages/index";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { getUserProfile } from "./features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(getUserProfile());
    }
  }, [token]);

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
      <Pages />
    </Worker>
  );
};

export default App;
