import React from "react"; // React framework library
import ReactDOM from "react-dom/client"; // Declare for calling DOM to be rendered
import "./index.css";
import App from "./App"; // Modular Component
import "antd/dist/reset.css";

// Rendering first argument DOM element HTML onscreen
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
