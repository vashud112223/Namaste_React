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
// jsx (transpiled before it reaches the JS engine)- PARCEL
// js engine is not understand the jsx so babel(provided by parcel) first transpile jsx to react element then using render concert it into html so browser can understand
// always uses camelcase when uses attributes in jsx

const Title = () => (
  <h1 className="head" tabIndex="1" id="heading">
    Namaste react title
  </h1>
);
// const Title = function() {
//   return(
//   <h1 className="head" tabIndex="1" id="heading">
//     Namaste react
//   </h1>
// );
// };
// if we write jsx in multiple line then always uses bracket
// root.render(jsxHeading);

// React Components
// class based components-old
//functional components-new

// React Functional Component- it is just a normal javascript function
// A function which returns react element ot jsx is called react functional component
const element = <span>React Element</span>;
const title = (
  <h1 className="head" tabIndex="1" id="heading">
    {element}
    Namaste react
  </h1>
);

// Component Composition-> the functional component called inside another functional components
const number = 100;
const HeadingComponent = () => (
  <div id="container">
    <h2>{console.log("javascript")}</h2>
    <h2>{100 + 200}</h2>
    <Title/>
    <Title></Title>
    {Title()}
    <h1 className="heading">Namaste React functional component</h1>
  </div>
);

root.render(<HeadingComponent />); // this is how functional component is rendered
// const fn = ()=> true;
// const fn2 = ()=> {
//   return true;
// }
// these two functiona are same
