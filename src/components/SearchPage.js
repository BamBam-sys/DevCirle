import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { FiMenu } from "react-icons/fi";
import "../index.css";
import UserCard from "./UserCard";
import mockdata from "../MOCK_DATA.json";

function SearchPage() {
  const [cardInfo, setCardInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [showLinkItems, setShowLinkItems] = useState(false);

  useEffect(() => setCardInfo(mockdata), []);

  const searchVal = (data) => {
    setSearch(data);
  };

  return (
    <>
      <div className='navbar'>
          <div className='logo'>DevCircle</div>
          <SearchBar searchVal={searchVal} />
          <div className='navLinks'>
              <div className='navLinkItems' id={showLinkItems ? 'hidden' : ''}>
                  <a href='/homepage'>About</a>
                  <a href='/loginform'>Log in</a>
                  <a href='/loginform'>Log out</a>
                  <a href='/signupform'>Sign up</a>
              </div>
              <button onClick={() => setShowLinkItems(!showLinkItems)}><FiMenu /></button>
          </div>
      </div>
      <div className="user-card">
        {cardInfo
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.first_name.toLowerCase().includes(search.toLowerCase()) ||
              val.last_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((data) => (
            <UserCard
              key={data.id}
              name={`${data.first_name} ${data.last_name}`}
              email={data.email}
            />
          ))}
      </div>
    </>
  );
}

export default SearchPage;
