import React, { useEffect } from "react";
import { useState } from "react";
import { liked, unliked } from "../redux/action/likeUnlikeActions";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import mockdata from "../MOCK_DATA.json";
import style from "../styles/profilepage.module.css";

import { useParams } from "react-router-dom";

function ProfilePage() {
  const loggedInUser = useSelector((state) => state.signup.data);

  const data = loggedInUser.data;

  const isLoggedin = loggedInUser.status;

  console.log(isLoggedin);

  // console.log(
  //   "fisrt name",
  //   data.firstName,
  //   "lastname",
  //   data.lastName,
  //   "gender",
  //   data.gender
  // );

  // const { id } = useParams();

  const [currentUser, setCurrentUser] = useState({
    name: "ayo",
    likes: [12, 13, 17, 19],
  });

  const iconStyle = {
    fontSize: "25px",
    marginRight: "35px",
    cursor: "pointer",
    color: "#ffffff",
  };

  const handleLike = () => {
    //put request to the backend accompanied by id of current user responsible for liking, updating the profile
    //update userprofile to reflect the profile being liked by the current user.
    setCurrentUser({
      ...currentUser,
      likes: [...currentUser.likes, 10],
    });
    // dispatch(liked());
  };

  // console.log(currentUser.likes.includes(10) ? "thumbs down" : "thumbs up");

  const handleUnLike = () => {
    //put request to the backend accompanied by id of current user responsible for unliking, updating the profile
    //update userprofile to reflect the profile being liked by the current user.
    setCurrentUser({
      ...currentUser,
      likes: currentUser.likes.filter((id) => id !== 10),
    });
    // dispatch(unliked());
  };

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.topDiv}>
          <div className={style.profileImage}></div>
          <div className={style.likes}>
            {currentUser.likes.includes(10) ? (
              <MdThumbDown onClick={handleUnLike} style={iconStyle} />
            ) : (
              <MdThumbUp onClick={handleLike} style={iconStyle} />
            )}
            <span className={style.likeCounter}>
              {currentUser.likes.length}
            </span>
            <span className={style.likeCount}>Likes</span>
          </div>
        </div>
        <div className={style.bottomDiv}>
          <div className={style.infoUser}>
            <h2>{`${data.firstName} ${data.lastName}`}</h2>
            <h2>{data.role}</h2>
            <h3>{data.gender}</h3>

            <h3>{data.github}</h3>
            {isLoggedin && (
              <button type="button" className={style.pBtn}>
                Edit profile
              </button>
            )}
            {isLoggedin && (
              <button type="button" className={style.pBtn}>
                Message
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={style.mainDiv2}>
        <h2>Recent Github Repositories:</h2>
      </div>
    </>
  );
}

export default ProfilePage;
