import React from "react";
import CardImage from "../images/avatar.jpg";
import "../index.css";

function UserCard({ name, email }) {
  return (
    <>
      <div className="card">
        <img src={CardImage} className="card-image" />
        <div className="card-text">
          <h2>{name}</h2>
          <h3>{email}</h3>
        </div>
      </div>
    </>
  );
}

export default UserCard;
