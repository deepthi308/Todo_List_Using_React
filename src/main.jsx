// This is an entry point of the application and this jsx file is responsible or rendering the root component to the root of the application

// Importing libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Importing root component
import App from "./App";

// Selecting root element
const rootEl = document.getElementById("root");

// Creating root object using the createRoot function by passing root element as argument
const root = ReactDOM.createRoot(rootEl);

// Rendering the root component inside the root using the render function of the root object
root.render(
  // Wrapping the root component using StrictMode component coming from react to validate whether the application is following good practices or not
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
