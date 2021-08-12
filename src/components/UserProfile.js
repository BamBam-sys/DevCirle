import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { liked, unliked } from "../redux/action/likeUnlikeActions";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import style from "../styles/profilepage.module.css";
import { getUser, getToken } from "../utility/Common";

import { useParams } from "react-router-dom";
import Loading from "./Loading";
import NavBar from "./Navbar";

function ProfilePage() {
  const { id } = useParams();
  const storageData = localStorage.getItem("userList");
  const userData = JSON.parse(storageData);

  const data = userData.data;
  const [user] = data.filter((user) => user._id === id);
  console.log(user);

  const loggedInUser = useSelector((state) => state.getUsers);
  console.log(loggedInUser);

  const token = getToken();

  // console.log(user);
  // console.log(token);

  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   setUser(loggedInUser.data);
  // }, []);

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
      <NavBar />
      {loggedInUser.isLoading ? (
        <Loading />
      ) : (
        <div className={style.container}>
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
                <h2>{`${user.firstName} ${user.lastName}`}</h2>
                <h2>{user.role}</h2>
                <h3>{user.gender}</h3>
                <h3>{user.github}</h3>
                {token && (
                  <button type="button" className={style.pBtn}>
                    Edit profile
                  </button>
                )}
                {token && (
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
        </div>
      )}
    </>
  );
}

export default ProfilePage;
