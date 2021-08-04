import { useState } from "react";
import SearchBar from "./SearchBar";
import { FiMenu } from "react-icons/fi";
import "../index.css";

const NavBar = () => {

    const [showLinkItems, setShowLinkItems] = useState(false);
    return (
        <div className='navbar'>
            <div className='logo'>DevCircle</div>
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
    )
}

export default NavBar
