import React, { useEffect, useState } from "react";
import { fetchData } from "../Home/api";
import Layout from "../Layout/Layout";
import { useParams } from "react-router";
import "./CardPerson.css";

// App
export default function CardPerson() {
  const [data, setData] = useState({});
  const id = useParams().id || "";

  useEffect(() => {
    const getData = async () => {
      setData(
        await fetchData(
          `https://api.themoviedb.org/3/person/${id}?language=en-US`
        )
      );
    };
    getData();
  }, [id]);
  console.log(data);
  return (
    <Layout>
      <div className="card_box">
        {data && (
          <div className="card_post_box">
            <div className="card_post">
              <div className="card_post_img">
                {data.profile_path && (
                  <img
                    className="post_img"
                    src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
                    alt="Image"
                  />
                )}
              </div>
              <div className="card_text">
                <div className="card_titleText">{data.name}</div>
                <div className="card_releaseDate">
                  <div className="card_releaseDate_day">
                    {data.birthday} {data.deathday && "-"} {data.deathday}
                  </div>
                </div>
                <div className="card_overview">{data.biography}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
