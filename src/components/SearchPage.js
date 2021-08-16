import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
import { FiMenu } from "react-icons/fi";
import "../index.css";
import UserCard from "./UserCard";
import { Link, useHistory } from "react-router-dom";
import { getToken, removeUserSession } from "../utility/Common";
import Loading from "./Loading";
import { MdKeyboardBackspace } from "react-icons/md";

function SearchPage() {
  const getUsers = useSelector((state) => state.getUsers);

  const loading = getUsers.isLoading;
  const storageData = localStorage.getItem("userList");
  const data = JSON.parse(storageData);

  const history = useHistory();
  const [search, setSearch] = useState("");
  const [showLinkItems, setShowLinkItems] = useState(false);

  const token = getToken();

  const searchVal = (data) => {
    setSearch(data);
  };

  function handleClick(id) {
    history.push(`/userprofile/${id}`);
  }

  function handleLogOut() {
    removeUserSession();
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">DevCircle</div>
        <SearchBar searchVal={searchVal} />
        <div className="navLinks">
          <div className="navLinkItems" id={showLinkItems ? "hidden" : ""}>
            <Link to="/">Home</Link>
            <Link to="#">About</Link>
            {token ? null : <Link to="/login">Log in</Link>}

            {token && (
              <Link to="/login" onClick={handleLogOut}>
                Log out
              </Link>
            )}
            {token ? null : <Link to="/signup">Sign up</Link>}
          </div>
          <button onClick={() => setShowLinkItems(!showLinkItems)}>
            <FiMenu />
          </button>
        </div>
      </div>
      <MdKeyboardBackspace
        className="backIcon"
        onClick={() => history.goBack()}
      />
      {loading ? (
        <Loading />
      ) : (
        <div className="user-card">
          {data.data
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.firstName.toLowerCase().includes(search.toLowerCase()) ||
                val.lastName.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((data) => (
              <UserCard
                key={data._id}
                id={data._id}
                name={`${data.firstName} ${data.lastName}`}
                email={data.email}
                onClick={handleClick}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default SearchPage;
