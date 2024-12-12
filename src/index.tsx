import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./backend/server";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// Call make Server
makeServer();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
