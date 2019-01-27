import React from "react";

import { createContainer } from "meteor/react-meteor-data";
import { Info } from "../../imports/collections/collection";

const List = (props) => {
    console.log(props.Info)

  return (
    <div>
      <div className="list" />

      <p> List </p>
    </div>
  );
};

export default createContainer(() => {
  Meteor.subscribe("Info");
  return { Info: Info.find({}).fetch() };
}, List);
