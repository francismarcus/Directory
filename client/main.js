import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";

import "./main.html";

const App = () => {
  return (
    <div>
      <h1> Hello World! </h1>
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
});
