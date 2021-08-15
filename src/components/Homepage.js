import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import UserCard from "./UserCard";
import mockdata from "../MOCK_DATA.json";
import Footer from "./Footer";
import "../index.css";
import { Link } from "react-router-dom";
import { getUsersAsync } from "../redux/action/getUserAction";

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => setCardInfo(mockdata), []);

  function handleClick() {
    dispatch(getUsersAsync());
    history.push("/searchpage");
  }
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="userList">
        <header>Meet some of our users</header>
      </div>
      <div className="user-card">
        {cardInfo.slice(0, 6).map((data) => (
          <UserCard
            key={data.id}
            name={`${data.first_name} ${data.last_name}`}
            email={data.email}
          />
        ))}
      </div>
      <div className="seeMore">
        <button onClick={handleClick}>See More</button>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
