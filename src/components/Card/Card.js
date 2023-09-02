import React, { useEffect, useState } from "react";
import "./Card.css";
import { useParams } from "react-router";
import { fetchData } from "../Home/api";
import Layout from "../Layout/Layout";

function Card() {
  const [data, setData] = useState({});

  const id = useParams().id || "";

  useEffect(() => {
    const getData = async () => {
      const url = "https://moviesdatabase.p.rapidapi.com/titles/" + id;

      const resGenres = await fetchData(url);
      setData(resGenres);
    };
    getData();
  }, [id]);

  return (
    <Layout>
      {data.results && (
        <div className="card_post">
          <div className="card_post_img">
            {data.results.primaryImage && data.results.primaryImage.url && (
              <img
                className="post_img"
                src={data.results.primaryImage.url}
                alt="Image"
              />
            )}
          </div>
          <div className="card_text">
            <div className="card_titleText">
              {data.results.titleText && data.results.titleText.text}
            </div>
            <div className="card_releaseDate">
              <div className="card_releaseDate_day">
                {data.results.releaseDate &&
                  data.results.releaseDate.day !== null &&
                  data.results.releaseDate.day.toString().padStart(2, "0")}
              </div>
              <div className="card_releaseDate_month">
                {data.results.releaseDate &&
                  data.results.releaseDate.month !== null &&
                  data.results.releaseDate.month.toString().padStart(2, "0")}
              </div>
              <div className="card_releaseDate_year">
                {data.results.releaseDate && data.results.releaseDate.year}
              </div>
            </div>
            <div className="card_titleType">
              {data.results.titleType && data.results.titleType.text}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Card;
