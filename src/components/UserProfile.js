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
import { MdKeyboardBackspace } from "react-icons/md";

function ProfilePage() {
  const history = useHistory();

  const { id } = useParams();
  const storageData = localStorage.getItem("userList");
  const userData = JSON.parse(storageData);

  const data = userData.data;
  const [user] = data.filter((user) => user._id === id);

  console.log(user);

  const loggedInUser = localStorage.getItem("user");
  const loggedInUserData = JSON.parse(loggedInUser);
  const loggedInUserId = loggedInUserData.id;
  console.log(user.github);

  const token = getToken();

  const [repo, setRepo] = useState([]);

  useEffect(() => {
    async function gitHubFetch() {
      let res = await axios.get(
        "https://api.github.com/users/alameensodiq/repos"
      );

      let repos = [];
      if (res.status === 200) {
        for (let i = 0; i < 3; i++) {
          repos.push(res.data[i]);
        }
      }
      console.log(res.data);
      setRepo(repos);
    }
    gitHubFetch();
  }, []);

  // code below fetches the github repos dynamically

  // const gitHubUsername = user.github.slice(19);
  // console.log(gitHubUsername);

  // useEffect(() => {
  //   async function gitHubFetch() {
  //     let res = await axios.get(
  //       `https://api.github.com/users/${gitHubUsername}/repos`
  //     );

  //     let repos = [];
  //     if (res.status === 200) {
  //       for (let i = 0; i < 3; i++) {
  //         repos.push(res.data[i]);
  //       }
  //     }
  //     setRepo(repos);
  //   }
  //   gitHubFetch();
  //   console.log(repo);
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
    let response = await likesApi.post(
      `/users/${loggedInUserId}/likes-from-user`,
      toUserId
    );
    //put request to the backend accompanied by id of current user responsible for liking, updating the profile
    //update userprofile to reflect the profile being liked by the current user.

    setCurrentUser({
      ...currentUser,
      likes: [...currentUser.likes, 10],
    });
    // dispatch(liked());
  };

  // console.log(currentUser.likes.includes(10) ? "thumbs down" : "thumbs up");

  const handleUnLike = async () => {
    //put request to the backend accompanied by id of current user responsible for unliking, updating the profile
    //update userprofile to reflect the profile being liked by the current user.
    let response = await likesApi.delete(
      `/users/${loggedInUserId}/likes-from-user`,
      toUserId
    );
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
              {/* <ul>
                {repo.map((repo) => (
                  <li key={repo.id}>{repo.name}</li>
                ))}
              </ul> */}

              {/* use code below instead to dynamically get the repos of the current userr */}

              {/* <ul>
                {repo &&
                  repo.map((repo) => (
                    <a key={repo.id} href={repo.html_url} target="_blank">
                      <li>{repo.name}</li>
                    </a>
                  ))}
              </ul> */}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default ProfilePage;
