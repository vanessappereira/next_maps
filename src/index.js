import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReportContextProvider } from "./context/ReportContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReportContextProvider>
    <App />
  </ReportContextProvider>
);
