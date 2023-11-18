import React from "react";
import Layout from "../Layout/Layout";
import Carousel from "./Carousel";
import Menu from "./Menu/Menu";
import Cards from "./Cards/Cards";
import "./Home.css";

// App
function Home() {
  return (
    <Layout>
      <div className="home">
        <Carousel />
        <div className="home_content">
          <Menu />
          <Cards />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
