import React, { useEffect } from "react";
import axios from "axios";
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
import Footer from "./Footer";

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

  let repos = [];

  async function gitHubFetch() {
    let res = await axios.get(
      "https://api.github.com/users/alameensodiq/repos"
    );
    let data = res.data;

    for (let i = 0; i < 3; i++) {
      repos.push(<li key={data.id}>{data.name}</li>);
    }
    console.log(repos);
  }

  gitHubFetch();

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
        <div className={style.section}>
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
                sapiente pariatur. Doloribus aliquam minus sint fugit, nostrum
                ad, quasi corporis, natus veniam architecto necessitatibus
                dolorum totam ab neque. Quidem illum repellendus ipsa tempora,
                ea assumenda a beatae quo voluptates ex doloribus. Reprehenderit
                similique omnis, hic obcaecati, laboriosam iste dolorum ab
                deserunt soluta aut impedit nihil? Libero quos tempora corrupti
                quibusdam saepe ullam necessitatibus non rem illo atque nobis
                officia, consequatur quam modi esse, maxime ex dolore provident
                aliquid sequi commodi optio quae tempore! Sed, aliquam, magnam
                labore dignissimos soluta debitis magni quis nobis distinctio
                laudantium consectetur provident. Veniam doloremque tempora
                soluta incidunt dolorum ipsam?
              </p>
            </div>
            <div className={style.github}>
              <h3>Recent Github Repositories:</h3>
              <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
              </ul>
              {repos.map((repo) => repo)}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default ProfilePage;
