import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import { fetchData } from "./api.js";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

// Home
const Carousel = () => {
  const [data, setData] = useState([]);
  const [leftOffset, setLeftOffset] = useState(0);
  const [moveLeft, setMoveLeft] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  //   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  //   ширина екрана

  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=us";

      const resGenres = await fetchData(url); // fetchData знаходиться в api.js
      setData(resGenres);
    };
    getData();
  }, []);
  //   --
  useEffect(() => {
    const interval = setInterval(() => {
      setMoveLeft((prevMoveLeft) => !prevMoveLeft);
    }, 8000);
    setIntervalId(interval);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setLeftOffset((prevOffset) => (moveLeft ? 0 : prevOffset - 242));
    }, 0);

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [moveLeft]);
  const startTimer = () => {
    clearInterval(intervalId); // Очистка предыдущего интервала
    const interval = setInterval(() => {
      setMoveLeft((prevMoveLeft) => !prevMoveLeft);
    }, 15000); // Запуск нового интервала
    setIntervalId(interval); // Сохранение нового идентификатора интервала
  };
  const blockStyle = {
    left: `${leftOffset}px`,
    transition: "left 0.9s ease",
  };
  // --
  return (
    <div className="carousel">
      <div className="carousel_parts" style={blockStyle}>
        {data.results &&
          data.results.slice(0, 12).map((item, index) => (
            <Link
              key={index}
              className={`carousel_part ${item.id} link`}
              to={`/post/movie/${item.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt="Описание изображения"
              />
              <div className="carousel_text">
                <div className="api-card-box-text">
                  <div className="api-card-text">
                    {item.title ? item.title : item.name}
                  </div>
                  <div className="api-card-text">
                    {item.release_date
                      ? item.release_date
                      : item.first_air_date}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <BsFillArrowLeftSquareFill
        color="#202328"
        size={40}
        className="arrowLeft"
        onClick={(e) => {
          setMoveLeft((a) => !a);
          startTimer();
        }}
      />
      <BsFillArrowRightSquareFill
        color="#202328"
        size={40}
        className="arrowRight"
        onClick={(e) => {
          setMoveLeft((a) => !a);
          startTimer();
        }}
      />
    </div>
  );
};

export default Carousel;
