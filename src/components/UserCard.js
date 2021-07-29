import React from "react";

function UserCard({ name, email }) {
  return (
    <div>
      <div className="card">
        <div className="card-image"></div>
        <div className="card-text">
          <h2>{name}</h2>
          <h3>{email}</h3>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
