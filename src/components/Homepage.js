import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

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
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => setCardInfo(mockdata), []);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

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
      <div className="seeMore" onClick={() => dispatch(getUsersAsync())}>
        <Link to="/searchpage">See More</Link>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
