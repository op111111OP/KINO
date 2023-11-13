import React, { useEffect, useState } from "react";
import "./Cards.css";
import CarouselNum from "./CarouselNum/CarouselNum";
import { fetchData } from "../api";
import { Link } from "react-router-dom";

// Home
function Cards() {
  const [data, setData] = useState([]);
  const [selectedPage, setSelectedPage] = useState("1");
  const [page, setPage] = useState();
  function valuesPage(i) {
    setSelectedPage(i);
  }
  //   console.log(selectedPage);
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=" +
        selectedPage;

      const resGenres = await fetchData(url); // fetchData знаходиться в api.js
      setData(resGenres);
    };
    getData();
  }, [selectedPage]);

  useEffect(() => {
    if (data.total_pages >= 500) {
      setPage(500);
    } else {
      setPage(data.total_pages);
    }
  }, [data]);
  //   console.log(data);

  return (
    <div className="cards">
      {data.results &&
        data.results.map((item, index) => (
          <Link
            key={index}
            className="card  link"
            to={`/post/movie/${item.id}`}
          >
            <div className="card_box">
              <img
                className="backdrop-img"
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt="Image"
              />
              <div className="card_box_text">
                <div className="card_img">
                  {item.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                      alt="Image"
                    />
                  )}
                </div>
                <div className="card_text">
                  <div className="card_titleText">{item.original_title}</div>
                  <div className="card_releaseDate">{item.release_date}</div>
                  <div className="card_titleType">{item.overview}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      <CarouselNum valuesPage={valuesPage} page={page} />
    </div>
  );
}

export default Cards;
