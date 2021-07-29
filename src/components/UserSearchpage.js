import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import mockdata from "../MOCK_DATA.json";

function UserSearchPage() {
  const [cardInfo, setCardInfo] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => setCardInfo(mockdata), []);

  const searchVal = (data) => {
    setSearch(data);
  };

  return (
    <>
      <SearchBar searchVal={searchVal} />
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

export default UserSearchPage;
