/** <div id="parent">
  <div id="child">
    <h1>"I'm h1 tag"</h1>
    <h2>"I'm h2 tag"</h2>
  </div>
   <div id="child2">
    <h1>"I'm h1 tag"</h1>
    <h2>"I'm h2 tag"</h2>
  </div>
</div> */

// ReactElement(object)=>HTML(Browser understand)

// React is a library beacause it can work on small portion of javascript code or app
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

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
