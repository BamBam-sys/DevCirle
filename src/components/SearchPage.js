import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import mockdata from "../MOCK_DATA.json";
import style from "../styles/searchpage.module.css";

function SearchPage() {
  const [cardInfo, setCardInfo] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => setCardInfo(mockdata), []);

  const searchVal = (data) => {
    setSearch(data);
  };

  return (
    // className={style.section}
    <section className={style.section}>
      <SearchBar searchVal={searchVal} />
      <div className={style.userCard}>
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
    </section>
  );
}

export default SearchPage;
