import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { FiMenu } from "react-icons/fi";
import "../index.css";
import { Link, useHistory } from "react-router-dom";
import { getToken } from "../utility/Common";

const NavBar = ({ SearchBar }) => {
  // const loggedInUser = useSelector((state) => state.login);

  // const data = loggedInUser.data;

  // const isLoggedIn = data.status;

  // console.log(loggedInUser);
  // console.log(isLoggedIn);

  const token = getToken();

  const [showLinkItems, setShowLinkItems] = useState(false);

  const history = useHistory();

  const logOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div className="navbar">
      <div className="logo">DevCircle</div>
      {SearchBar}
      <div className="navLinks">
        <div className="navLinkItems" id={showLinkItems ? "hidden" : ""}>
          <Link to="/">Home</Link>
          <a href="#">About</a>
          {token ? (
            <Link to="/login" onClick={logOut}>
              Log out
            </Link>
          ) : (
            <Link to="/login">Log in</Link>
          )}
          {token ? null : <Link to="/signup">Sign up</Link>}
        </div>
        <button onClick={() => setShowLinkItems(!showLinkItems)}>
          <FiMenu />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
