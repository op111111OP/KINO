import React, { useEffect, useState } from "react";
import "./Card.css";
import { useParams } from "react-router";
import { fetchData } from "../Home/api";
import Layout from "../Layout/Layout";
import YourComponent from "./YourComponent/YourComponent";
import CarouselPh from "./CarouselPh/CarouselPh";
import CarouselSimilar from "./CarouselSimilar/CarouselSimilar";
import { VscTriangleDown } from "react-icons/vsc";

function Card() {
  const [data, setData] = useState({});
  const [credits, setCredits] = useState({});
  const [images, setImages] = useState({});
  const [videos, setVideos] = useState({});
  const [similar, setSimilar] = useState({});

  const [showBlock, setShowBlock] = useState({});

  const toggleShowBlockTrue = (itemId) => {
    setShowBlock((prevShowBlock) => ({
      ...prevShowBlock,
      [itemId]: true,
    }));
  };
  const toggleShowBlockFalse = (itemId) => {
    setShowBlock((prevShowBlock) => ({
      ...prevShowBlock,
      [itemId]: false,
    }));
  };

  const id = useParams().id || "";
  const tupe = useParams().tupe || "";
  useEffect(() => {
    const getData = async () => {
      setData(
        await fetchData(
          `https://api.themoviedb.org/3/${tupe}/${id}?language=en-US`
        )
      );
      setCredits(
        await fetchData(
          `https://api.themoviedb.org/3/${tupe}/${id}/credits?language=en-US`
        )
      );
      setImages(
        await fetchData(
          `https://api.themoviedb.org/3/${tupe}/${id}/images?language=en`
        )
      );
      setVideos(
        await fetchData(`https://api.themoviedb.org/3/${tupe}/${id}/videos`)
      );
      setSimilar(
        await fetchData(
          `https://api.themoviedb.org/3/${tupe}/${id}/similar?language=en-US&page=1`
        )
      );
    };
    getData();
  }, [id, tupe]);
  //   console.log(data.seasons);

  return (
    <Layout>
      <div className="card_box">
        {data && data.backdrop_path && (
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
                <div className="card_titleText">
                  {data.original_title || data.name}
                </div>
                <div className="card_releaseDate">
                  <div className="card_releaseDate_day">
                    {data.release_date || data.first_air_date}
                  </div>
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
                <div className="seasons">
                  {data.seasons &&
                    data.seasons.map((item) => (
                      <div
                        key={item.id}
                        className="text-overview-box text-overview-box_box"
                      >
                        <div className="text-overview">
                          {/*  */}

                          {item.air_date && (
                            <div
                              onMouseEnter={() => toggleShowBlockTrue(item.id)}
                              onMouseLeave={() => toggleShowBlockFalse(item.id)}
                            >
                              {item.overview && (
                                <VscTriangleDown
                                  className={
                                    showBlock[item.id]
                                      ? "TriangleDown"
                                      : "TriangleRight"
                                  }
                                />
                              )}
                              {item.name ? item.name : null} Episode:{" "}
                              {item.episode_count} {item.air_date}
                            </div>
                          )}
                        </div>
                        {showBlock[item.id] && item.overview && (
                          <div className="showBlock-overview">
                            <div className="showBlock-overview_text">
                              {item.overview}
                            </div>
                            <div className="img-box_seson">
                              <img
                                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                alt=""
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <YourComponent ApiCredits={credits} />
          </div>
        )}
        <CarouselPh cardImg={images.backdrops} />
        {videos.results && videos.results.length > 0 && (
          <div className="videos">
            <div className="video-container">
              <iframe
                width="100%"
                className="iframe"
                src={"https://www.youtube.com/embed/" + videos.results[0].key}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        <CarouselSimilar cardSi={similar.results} />
      </div>
    </Layout>
  );
}

export default Card;
