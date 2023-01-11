import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

let mountNode = document.getElementById("app");
const root = ReactDOM.createRoot(mountNode)
root.render(<App />);