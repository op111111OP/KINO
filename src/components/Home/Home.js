import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Carousel from "./Carousel";
import Menu from "./Menu/Menu";
import Cards from "./Cards/Cards";
import "./Home.css";
import { fetchData } from "./api";

// App
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/103/recommendations?language=en-US&page=1";
      const resGenres = await fetchData(url); // fetchData знаходиться в api.js
      setData(resGenres);
    };
    getData();
  }, []);

  //   console.log(data);

  return (
    <Layout>
      <div className="home">
        {/* <Carousel /> */}
        <div className="home_content">
          <Menu />
          <Cards />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
