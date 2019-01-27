import React from "react";

import { createContainer } from "meteor/react-meteor-data";
import { Info } from "../../imports/collections/collection";

import Details from "./details";

const List = props => {

  return (
    <div>
      <div className="list" />
        {props.Info.map(Info => <Details key={Info._id} Info={ Info } />)}
    </div>
  );
};

export default createContainer(() => {
  Meteor.subscribe("Info");
  return { Info: Info.find({}).fetch() };
}, List);
