import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// Header
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("Search...");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

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
        <div className="faSearch_box" id="faSearch"></div>
      </Link>
    </div>
  );
};

export default SearchBar;
