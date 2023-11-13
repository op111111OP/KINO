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
  const [arrayIdImg, setArrayIdImg] = useState([]);
  const [leftOffset, setLeftOffset] = useState(0);
  const [moveLeft, setMoveLeft] = useState(true);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const urls = [
        //   "https://moviesdatabase.p.rapidapi.com/titles/tt10914400",
        //   "https://moviesdatabase.p.rapidapi.com/titles/tt17078556",
        //   "https://moviesdatabase.p.rapidapi.com/titles/tt19223146",
        //   "https://moviesdatabase.p.rapidapi.com/titles/tt19368748",
        //   "https://moviesdatabase.p.rapidapi.com/titles/tt19878326",
        //   "https://moviesdatabase.p.rapidapi.com/titles/tt13103328",
        //   "https://moviesdatabase.p.rapidapi.com/titles/tt20217220",
        //   "https://moviesdatabase.p.rapidapi.com/titles/tt10767052",
        //   "https://moviesdatabase.p.rapidapi.com/titles/tt19892236",
        //   "https://moviesdatabase.p.rapidapi.com/titles/tt10994300",
        //   "https://moviesdatabase.p.rapidapi.com/titles/tt10209920",
      ];

      const responses = await Promise.all(urls.map((url) => fetchData(url))); // fetchData знаходиться в api.js
      setArrayIdImg(responses);
    };
    getData();
  }, []);
  if (arrayIdImg[0] !== undefined) {
    //  console.log(arrayIdImg[0]);
  }
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
        {arrayIdImg.map((item, index) => (
          <Link
            key={index}
            className={`carousel_part ${item.results.id} link`}
            to={`/post/${item.results.id}`}
          >
            <img
              src={item.results.primaryImage.url}
              alt="Описание изображения"
            />
            <div className="carousel_text">{item.results.titleText.text}</div>
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
