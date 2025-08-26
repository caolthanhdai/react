import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";  // import component Todo bạn đã viết
import "./index.css";         // optional: css

// đây giống như "hàm main"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
