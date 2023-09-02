import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchData } from "../../Home/api";

// Header
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("Search...");
  const [data, setData] = useState([]);
  const [clickValue, setclickValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleInputClick = () => {
    //  console.log(searchValue);
    //  setSearchValue(e.target.value);
    setclickValue(searchValue);
  };
  //   useEffect(() => {
  //     const getData = async () => {
  //       const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${clickValue}?exact=false&titleType=movie`;
  //       const resGenres = await fetchData(url); // fetchData знаходиться в api.js
  //       setData((prevData) => resGenres);
  //     };
  //     getData();
  //   }, [searchValue]);
  //   console.log(clickValue);
  //   console.log(data);

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (target.id !== "search-input") {
        setSearchValue("Search...");
      } else {
        setSearchValue("");
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="search-bar" id="search-bar">
      <label htmlFor="search-input" className="search-label">
        <div className="search-input-container">
          <input
            type="text"
            id="search-input"
            className="search-input"
            value={searchValue}
            onChange={handleInputChange}
          />
        </div>
      </label>
      <FaSearch color="#e3d2d2" className="faSearch" />
      <Link className="link" to={`/search/${searchValue}`}>
        <div
          className="faSearch_box"
          id="faSearch"
          onClick={handleInputClick}
        ></div>
      </Link>
    </div>
  );
};

export default SearchBar;
