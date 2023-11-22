import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Layout from "../Layout";
import { fetchData } from "../../Home/api";
import "./Header.css";
import CarouselNum from "../../Home/Cards/CarouselNum/CarouselNum";

const SearchCard = () => {
  const [data, setData] = useState([]);
  const tupe = useParams().tupe || "";
  const [selectedPage, setSelectedPage] = useState("1");
  const [page, setPage] = useState();
  function valuesPage(i) {
    setSelectedPage(i);
  }

  useEffect(() => {
    if (data.total_pages >= 500) {
      setPage(500);
    } else {
      setPage(data.total_pages);
    }
  }, [data]);

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/search/multi?query=${tupe}&include_adult=false&language=en-US&page=${selectedPage}`;
      const resGenres = await fetchData(url); // fetchData знаходиться в api.js
      setData((prevData) => resGenres);
    };
    getData();
  }, [selectedPage, tupe]);
  console.log(data.results);
  return (
    <Layout>
      <div className="box-request card_post_box">
        <div className="api-card ">
          {data.results &&
            data.results.map(
              (item) =>
                (item.poster_path || item.profile_path) && (
                  <Link
                    key={item.id}
                    className="linc_card  link"
                    to={`/post/${item.media_type}/${item.id}`}
                  >
                    <div className="api-card-box">
                      {item.poster_path || item.profile_path ? (
                        <img
                          className="img"
                          src={`https://image.tmdb.org/t/p/original${
                            item.poster_path || item.profile_path
                          }`}
                          alt=""
                        />
                      ) : (
                        <div className="img_404"></div>
                      )}
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
                )
            )}
        </div>
        <CarouselNum valuesPage={valuesPage} page={page} />
      </div>
    </Layout>
  );
};

export default SearchCard;
