import React, { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import "./Menu.css";
import { fetchData } from "../api";
// Home
const Menu = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1101);
  const [arrayGenres, setArrayGenres] = useState("");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1101);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const getData = async () => {
      const url = "https://moviesdatabase.p.rapidapi.com/titles/utils/genres";
      const resGenres = await fetchData(url); // fetchData знаходиться в api.js
      setArrayGenres(resGenres);
    };
    getData();
  }, []);
  //   console.log(arrayGenres.results);

  return (
    <div className="box_menu">
      <div className="button_menu">
        <BsList className="BsList" size={28} onClick={toggleMenu} />
        Menu
      </div>
      {isOpen && (
        <div className="text_menu">
          <div className="text_menu_categories">Categories</div>
          <div className="text_menu_By_genre">By genre</div>
          <div className="text_menu_columns">
            {Array.isArray(arrayGenres.results) &&
              arrayGenres.results.map((item, index) => (
                <div
                  className={`text_menu_genre ${
                    index === 0 ? "first_item" : ""
                  }`}
                  key={index}
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
