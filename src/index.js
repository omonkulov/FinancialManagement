import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/fonts.css";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
