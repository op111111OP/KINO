import React, { useEffect, useState } from "react";
import "./Card.css";
import { useParams } from "react-router";
import { fetchData } from "../Home/api";
import Layout from "../Layout/Layout";
import YourComponent from "./YourComponent/YourComponent";

function Card() {
  const [data, setData] = useState({});
  const [data1, setData1] = useState({});

  const id = useParams().id || "";
  const tupe = useParams().tupe || "";
  useEffect(() => {
    const getData = async () => {
      const url = [
        `https://api.themoviedb.org/3/${tupe}/${id}?language=en-US`,
        `https://api.themoviedb.org/3/${tupe}/${id}/credits?language=en-US`,
      ];

      const resGenres1 = await fetchData(url[0]);
      const resGenres2 = await fetchData(url[1]);
      setData(resGenres1);
      setData1(resGenres2);
    };
    getData();
  }, [id]);
  console.log(data1);

  return (
    <Layout>
      {data && (
        <div className="card_post_box">
          <img
            className="backdrop-img"
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt="Image"
          />
          <div className="card_post">
            <div className="card_post_img">
              {data.poster_path && (
                <img
                  className="post_img"
                  src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                  alt="Image"
                />
              )}
            </div>
            <div className="card_text">
              <div className="card_titleText">{data.title}</div>
              <div className="card_releaseDate">
                <div className="card_releaseDate_day">{data.release_date}</div>
              </div>
              <div className="card_overview">{data.overview}</div>
              <div className="card_titleType">tagline: {data.tagline}</div>
              <div className="card_genres_box">
                <div className="card_genres_title">genres:</div>
                {data.genres &&
                  data.genres.map((item, index) => (
                    <div className="card_genres" key={index}>
                      {item.name}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <YourComponent ApiCredits={data1} />
        </div>
      )}
    </Layout>
  );
}

export default Card;
