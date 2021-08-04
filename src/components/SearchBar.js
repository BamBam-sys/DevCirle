import React, { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import "../index.css";

const SearchBar = ({ searchVal }) => {
  const [searchData, setSearchData] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;

    setSearchData(value);
    searchVal(value);
  };

  return (
    <div className='search'>
            <input type='text' placeholder="Search here..." value={searchData} name="search" onChange={handleChange} />
            <button><FaSearch /></button>
    </div>
  );
};

export default SearchBar;
