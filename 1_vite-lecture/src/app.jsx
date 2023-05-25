import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return (
    // React.createElement(
    //     "div",
    //     { className : "dog-profile"},
    //     [
    //         React.createElement("h1", {} , "Luna"),
    //         React.createElement("h2", {} , "Dog"),
    //         React.createElement("h2", {} , "Havanese"),
    //     ]
    // )

    React.createElement("div", { className: "dog-profile" }, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h2", {}, props.breed),
    ])
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!!"),
    React.createElement(Pet, {
      name: "Sheru",
      animal: "dog",
      breed: "Jangli",
    }),
    React.createElement(Pet, {
      name: "Billa",
      animal: "cat",
      breed: "Jangli Billa",
    }),
    React.createElement(Pet, {
      name: "Mithu",
      animal: "bird",
      breed: "Green Parrot",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
