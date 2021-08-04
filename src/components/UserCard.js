import React from "react";
import style from "../styles/usercard.module.css";

function UserCard({ id, name, email }) {
  return (
    // className={style.userCard}
    <div>
      <div className={style.card}>
        <div className={style.cardImage}></div>
        <div className={style.cardText}>
          <h2>{name}</h2>
          <h3>{email}</h3>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
