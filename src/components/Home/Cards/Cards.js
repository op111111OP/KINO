import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cards.css";
import CarouselNum from "./CarouselNum/CarouselNum";
import { fetchData } from "../api";
import { Link } from "react-router-dom";

// Home
function Cards() {
  const [data, setData] = useState([]);

  const [selectedPage, setSelectedPage] = useState("1");
  const [page, setPage] = useState();
  const id = useParams().id || "";
  const tupe = useParams().tupe || "";
  function valuesPage(i) {
    setSelectedPage(i);
  }

  //   console.log(selectedPage);
  useEffect(() => {
    const getData = async () => {
      let url;

      if (id == "") {
        url =
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=" +
          selectedPage;
      } else {
        url = `https://api.themoviedb.org/3/discover/${tupe}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${selectedPage}&sort_by=popularity.desc&with_genres=${id}`;
      }
      const resGenres = await fetchData(url); // fetchData знаходиться в api.js
      setData(resGenres);
    };
    getData();
  }, [selectedPage, id]);

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
            to={`/post/${id == "" ? "movie" : tupe}/${item.id}`}
          >
            <div className="cards_box">
              <img
                className="backdrop-img"
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt="Image"
              />
              <div className="cards_box_text">
                <div className="cards_img">
                  {item.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                      alt="Image"
                    />
                  )}
                </div>
                <div className="cards_text">
                  <div className="cards_titleText">
                    {item.original_title || item.name}
                  </div>
                  <div className="cards_releaseDate">
                    {item.release_date || item.first_air_date}
                  </div>
                  <div className="cards_titleType">{item.overview}</div>
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
