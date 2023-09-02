import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../Layout";
import { fetchData } from "../../Home/api";

const SearchCard = () => {
  const location = useLocation();
  const searchValue = location.pathname.replace("/search/", ""); // Извлекаем значение параметра search из URL
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchValue}?exact=false&titleType=movie`;
      const resGenres = await fetchData(url); // fetchData знаходиться в api.js
      setData((prevData) => resGenres);
    };
    getData();
  }, [searchValue]);
  console.log(data);
  return (
    <Layout>
      <div className="cards cards_max">
        {data.results &&
          Array.isArray(data.results) &&
          data.results.map((item, index) => (
            <Link key={index} className="card link" to={`/post/${item.id}`}>
              <div className="card_box">
                <div className="card_img">
                  {item.primaryImage && item.primaryImage.url && (
                    <img src={item.primaryImage.url} alt="Image" />
                  )}
                </div>
                <div className="card_text">
                  <div className="card_titleText">
                    {item.titleText.text !== null ? item.titleText.text : ""}
                  </div>
                  <div className="card_releaseDate">
                    <div className="card_releaseDate_day">
                      {item.releaseDate.day !== null
                        ? item.releaseDate.day.toString().padStart(2, "0")
                        : ""}
                    </div>
                    <div className="card_releaseDate_month">
                      {item.releaseDate.month !== null
                        ? item.releaseDate.month.toString().padStart(2, "0")
                        : ""}
                    </div>
                    <div className="card_releaseDate_year">
                      {item.releaseDate.year !== null
                        ? item.releaseDate.year
                        : ""}
                    </div>
                  </div>
                  <div className="card_titleType">
                    {item.titleType.text !== null ? item.titleType.text : ""}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </Layout>
  );
};

export default SearchCard;
