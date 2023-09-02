import React, { useEffect, useState } from "react";
import "./Cards.css";
import CarouselNum from "./CarouselNum/CarouselNum";
import { fetchData } from "../api";
import { Link } from "react-router-dom";

// Home
function Cards() {
  const [data, setData] = useState([]);
  const [selectedPage, setSelectedPage] = useState("1");
  function valuesPage(i) {
    setSelectedPage(i);
  }
  //   console.log(selectedPage);
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page=" +
        selectedPage;
      const resGenres = await fetchData(url); // fetchData знаходиться в api.js
      setData((prevData) => resGenres);
    };
    getData();
  }, [selectedPage]);
  //   console.log(data.results[2]);

  return (
    <div className="cards">
      {data.results &&
        Array.isArray(data.results) &&
        data.results.map((item, index) => (
          <Link key={index} className="card  link" to={`/post/${item.id}`}>
            <div className="card_box">
              <div className="card_img">
                {item.primaryImage && item.primaryImage.url && (
                  <img src={item.primaryImage.url} alt="Image" />
                )}
              </div>
              <div className="card_text">
                <div className="card_titleText">{item.titleText.text}</div>
                <div className="card_releaseDate">
                  <div className="card_releaseDate_day">
                    {item.releaseDate.day.toString().padStart(2, "0")}
                  </div>
                  <div className="card_releaseDate_month">
                    {item.releaseDate.month.toString().padStart(2, "0")}
                  </div>
                  <div className="card_releaseDate_year">
                    {item.releaseDate.year}
                  </div>
                </div>
                <div className="card_titleType">{item.titleType.text}</div>
              </div>
            </div>
          </Link>
        ))}
      <CarouselNum valuesPage={valuesPage} />
    </div>
  );
}

export default Cards;
