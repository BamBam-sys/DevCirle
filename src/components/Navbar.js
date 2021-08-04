import { useState } from "react";
import SearchBar from "./SearchBar";
import { FiMenu } from "react-icons/fi";
import "../index.css";
import { Link } from "react-router-dom";

const NavBar = ({ SearchBar }) => {
  const isLoggedIn = false;

  const [showLinkItems, setShowLinkItems] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">DevCircle</div>
      {SearchBar}
      <div className="navLinks">
        <div className="navLinkItems" id={showLinkItems ? "hidden" : ""}>
          <a href="/homepage">About</a>
          {isLoggedIn ? (
            <Link to="/login">Log out</Link>
          ) : (
            <Link to="/login">Log in</Link>
          )}
          <Link to="/signup">Sign up</Link>
        </div>
        <button onClick={() => setShowLinkItems(!showLinkItems)}>
          <FiMenu />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
