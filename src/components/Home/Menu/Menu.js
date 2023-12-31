import React, { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import "./Menu.css";
import { fetchData } from "../api";
import { Link } from "react-router-dom";
// Home
const Menu = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1101);
  const [arrayGenresMovie, setArrayGenresMovie] = useState("");
  const [arrayGenresTv, setArrayGenresTv] = useState("");
  const toggleMenu = () => {
    if (window.innerWidth <= 1101) {
      setIsOpen(!isOpen);
    }
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
      const url = [
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        "https://api.themoviedb.org/3/genre/tv/list?language=en",
      ];

      const resGenres1 = await fetchData(url[0]);
      const resGenres2 = await fetchData(url[1]);
      // fetchData знаходиться в api.js
      setArrayGenresMovie(resGenres1);
      setArrayGenresTv(resGenres2);
    };
    getData();
  }, []);
  //   console.log(arrayGenresMovie.genres);

  return (
    <div className="box_menu">
      <div className="button_menu">
        <BsList className="BsList" size={28} onClick={toggleMenu} />
        Menu
      </div>
      {isOpen && (
        <div className="text_menu">
          <div className="text_menu_categories">Categories</div>
          <div className="text_menu_By_genre">By genre movie:</div>
          <div className="text_menu_columns">
            {Array.isArray(arrayGenresMovie.genres) &&
              arrayGenresMovie.genres.map((item, index) => (
                <div
                  onClick={toggleMenu}
                  className={`text_menu_genre ${
                    index === 0 ? "first_item" : ""
                  }`}
                  key={index}
                >
                  <Link className="menu_link link" to={`/movie/${item.id}`}>
                    {item.name}
                  </Link>
                </div>
              ))}
          </div>
          <div className="text_menu_By_genre">By genre tv:</div>
          <div className="text_menu_columns">
            {Array.isArray(arrayGenresTv.genres) &&
              arrayGenresTv.genres.map((item, index) => (
                <div
                  onClick={toggleMenu}
                  className={`text_menu_genre ${
                    index === 0 ? "first_item" : ""
                  }`}
                  key={index}
                >
                  <Link className="menu_link link" to={`/tv/${item.id}`}>
                    {item.name}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
