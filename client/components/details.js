import React from "react";

const Details = ({ Info }) => {
  
  const { email, phone, adresss, avatar } = Info;

  return (
  <div className="thumbnail">
    <img src={avatar} />
    <div className="caption">
      <h3>{name}</h3>
      <ul className="list-group">
      <li className="list-group-item">Email: {email}</li>
      <li className="list-group-item">Phone: {phone}</li>
      <li className="list-group-item">Address: {address}</li>
      </ul>
      </div>
  </div>);
};

export default Details;
