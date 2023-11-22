import React from "react";
import "./CarouselSimilar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
export default function CarouselSimilar({ cardSi }) {
  const id = useParams().id || "";
  const tupe = useParams().tupe || "";
  var settings = {
    arrows: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    swipeToSlide: true,
    autoplaySpeed: 6000,
  };
  //   console.log(cardSi);
  return (
    <div className="carouselPh_box">
      <Slider {...settings}>
        {cardSi &&
          cardSi.map(
            (item, index) =>
              item.poster_path && (
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="similar"
                  key={index}
                  to={`/post/${id === "" ? "movie" : tupe}/${item.id}`}
                >
                  <div className="similar_box">
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                      alt="similar"
                      className="backdrop-img backdrop-img-similar"
                    />
                    <div className="img-box-similar">
                      <img
                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                        alt="similar"
                      />
                    </div>
                    <div className="text-box-similar">
                      <div>{item.name || item.title}</div>
                      <div>{item.release_date || item.first_air_date}</div>
                    </div>
                  </div>
                </Link>
              )
          )}
      </Slider>
    </div>
  );
}
