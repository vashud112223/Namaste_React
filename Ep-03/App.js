import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// JSX- HTML-like or XML-like syntax
// jsx is not react or javascript in HTML

const jsxHeading = <h1 id="heading">Namaste react</h1>
root.render(jsxHeading);