import { useEffect } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { CookiesProvider, Cookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Pages from "./pages/index";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { setToken } from "./features/auth/authSlice";

const App = () => {
  const cookie = new Cookies();
  const { token } = useSelector((state) => state.auth);
  console.log("token", token);
  const dispatch = useDispatch();
  const userDetails = cookie.get("token");
  console.log(userDetails);
  useEffect(() => {
    if (userDetails) {
      dispatch(setToken(userDetails));
    }
  }, [userDetails]);

  return (
    <CookiesProvider>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <Pages />
      </Worker>
    </CookiesProvider>
  );
};

export default App;
