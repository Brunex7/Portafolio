import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById('root');

if (React.version >= '18.0.0') {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  ReactDOM.render(<App />, rootElement);
}