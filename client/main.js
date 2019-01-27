import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";

import "./main.html";

import List from "./components/list";

const App = () => {
  return (
    <div>
      <List />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
});
