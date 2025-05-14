/** <div id="parent">
  <div id="child">
    <h1>"I'm h1 tag"</h1>
  </div>
</div> */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I' h1 tag")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // render take the heading tag put it on the DOM and converted into the h1 tag
console.log(parent); 
root.render(parent);