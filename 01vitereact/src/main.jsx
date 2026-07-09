import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    );
}
/*
const reactElement = React.createElement(
  "tagName",
  {
    attribute1: "value1",
    attribute2: "value2",
  },
  "Text Content"
);
*/
const reactElement = React.createElement(
    "a",
    { href: "https://google.com", target: "_blank" },
    "click me",
);
createRoot(document.getElementById("root")).render(
  
  
  // reactElement
  <App />

);
