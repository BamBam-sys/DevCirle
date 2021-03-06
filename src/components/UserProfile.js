import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";
import { liked, unliked } from "../redux/action/likeUnlikeActions";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import style from "../styles/profilepage.module.css";
import { getUser, getToken } from "../utility/Common";

import { useParams, useHistory } from "react-router-dom";
import Loading from "./Loading";
import NavBar from "./Navbar";
import Footer from "./Footer";
import likesApi from "../api/likesApi";
import userFetch from "../api/userFetch";
import { MdKeyboardBackspace } from "react-icons/md";

function ProfilePage() {
  const history = useHistory();

  const { id } = useParams();
  // const [userState, setUserState] = useState({});
  const storageData = localStorage.getItem("userList");
  const userData = JSON.parse(storageData);
  const [userState] = userData.data.filter((user) => user._id === id);

  const [repo, setRepo] = useState([]);

  let userName;

  useEffect(() => {
    userName = userState.github.split("/")[3];
    async function gitHubFetch() {
      let res = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );

      let result = await res.json();

      let repos = [];
      if (result) {
        for (let i = 0; i < 3; i++) {
          repos.push(result[i]);
        }
      }
      setRepo(repos);
    }
    gitHubFetch();
    
  }, []);

  const token = getToken();
  const loggedInUserId = getUser();
  

  const currentUserLikes = 20; //dummy value

  // useEffect(() => {
  //   console.log(getUsers);
  //   const user = userFetch.get(`/${id}`);
  //   console.log(user);
  //   setUserState(user);
  // }, []);

  const [currentUser, setCurrentUser] = useState({
    name: "ayo", //don't know what to do with this yet
    likes: [12, 13, 25, 47],
  });

  const [likes, setLikes] = useState([]); //likes array holds all users logged in user has liked

  const iconStyle = {
    fontSize: "25px",
    marginRight: "35px",
    cursor: "pointer",
    color: "#ffffff",
  };

  const toUserId = id;

  const handleLike = async () => {
    //   let response = await likesApi.post(`/users/${loggedInUserId}/likes-from-user`, toUserId);
    //put request to the backend accompanied by id of current user responsible for liking, updating the profile
    //update userprofile to reflect the profile being liked by the current user.

    if (token) {
      let response = await likesApi.post(
        `/users/${loggedInUserId}/likes-from-user`,
        toUserId
      );
    } else {
      history.push("/login");
    }

    setCurrentUser({
      ...currentUser,
      likes: [...currentUser.likes, 10],
    });
    // dispatch(liked());
  };

  // console.log(currentUser.likes.includes(10) ? "thumbs down" : "thumbs up");

  const handleUnLike = async () => {
    //   //put request to the backend accompanied by id of current user responsible for unliking, updating the profile
    //   //update userprofile to reflect the profile being liked by the current user.
    //   let response = await likesApi.delete(`/users/${loggedInUserId}/likes-from-user`, toUserId);
    //   setCurrentUser({
    //     ...currentUser,
    //     likes: currentUser.likes.filter((id) => id !== 10),
    //   });
    //   // dispatch(unliked());
    if (token) {
      let response = await likesApi.post(
        `/users/${loggedInUserId}/likes-from-user`,
        toUserId
      );
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      <NavBar />

      <div className={style.section}>
        <MdKeyboardBackspace
          className={style.backIcon}
          onClick={() => history.goBack()}
        />
        <div className={style.container1}>
          <div className={style.mainDiv}>
            <div className={style.topDiv}>
              <div className={style.profileImage}></div>
              <div className={style.likes}>
                {currentUser.likes.includes(10) ? (
                  <MdThumbDown onClick={handleUnLike} style={iconStyle} />
                ) : (
                  <MdThumbUp onClick={handleLike} style={iconStyle} />
                )}
                <span className={style.likeCounter}>{currentUserLikes}</span>
                <span className={style.likeCount}>Likes</span>
              </div>
            </div>
            <div className={style.bottomDiv}>
              <div className={style.infoUser}>
                <h2>{`${userState.firstName} ${userState.lastName}`}</h2>
                <h2>{userState.role}</h2>
                <h3>{userState.gender}</h3>
                <h3>{userState.github}</h3>
                {token && (
                  <button type="button" className={style.pBtn}>
                    Edit profile
                  </button>
                )}
                {token && (
                  <button type="button" className={style.pBtn}>
                    Inbox
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={style.container2}>
          <div className={style.about}>
            <h3>About me:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              maiores, repellendus nam possimus atque velit cumque.
              Exercitationem laboriosam impedit id, veritatis omnis, delectus
              laudantium numquam provident sint inventore dolorum dolores sed
              vitae in harum repellat! Velit voluptate molestias soluta cum
              totam illo provident, quaerat voluptatum debitis suscipit
              doloremque culpa reiciendis vitae accusamus repellat odit libero
              sapiente pariatur. Doloribus aliquam minus sint fugit, nostrum ad,
              quasi corporis, natus veniam architecto necessitatibus dolorum
              totam ab neque. Quidem illum repellendus ipsa tempora, ea
              assumenda a beatae quo voluptates ex doloribus. Reprehenderit
              similique omnis, hic obcaecati, laboriosam iste dolorum ab
              deserunt soluta aut impedit nihil? Libero quos tempora corrupti
              quibusdam saepe ullam necessitatibus non rem illo atque nobis
              officia, consequatur quam modi esse, maxime ex dolore provident
              aliquid sequi commodi optio quae tempore! Sed, aliquam, magnam
              labore dignissimos soluta debitis magni quis nobis distinctio
              laudantium consectetur provident. Veniam doloremque tempora soluta
              incidunt dolorum ipsam?
            </p>
          </div>
          <div className={style.github}>
            <h3>Recent Github Repositories:</h3>

            {repo && (
              <ul>
                {repo &&
                  repo.map((repo) => (
                    <a key={repo.id} href={`${userState.github}/${repo.name}`} target="_blank">
                      <li>{repo.name}</li>
                    </a>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProfilePage;
