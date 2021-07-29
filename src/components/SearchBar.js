import React, { useState, useEffect } from "react";

const SearchBar = ({ searchVal }) => {
  const [searchData, setSearchData] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;

    setSearchData(value);
    searchVal(value);
  };

  const BarStyling = {
    // border: "2px solid rgba(252, 252, 252, 0.4)",
    // backgroundColor: "rgba(252, 252, 252, 0.2)",
    width: "20rem",
    padding: "0.5rem",
    marginTop: "35px",
    borderRadius: "15px",
  };

  return (
    <input
      style={BarStyling}
      value={searchData}
      placeholder="search here..."
      name="search"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
