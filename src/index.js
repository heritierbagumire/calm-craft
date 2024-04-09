import React from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import App from "./App";

AOS.init({
  duration: 800, // Duration of animation (in milliseconds)
  once: true, // Whether animation should only happen once while scrolling down
  easing: "ease-out", // Easing options
  // Add other options here as needed
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
