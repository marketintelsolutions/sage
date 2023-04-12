import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-whatsapp-widget/dist/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
