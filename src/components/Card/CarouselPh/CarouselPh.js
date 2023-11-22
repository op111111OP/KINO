import React from "react";
import "./CarouselPh.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselPh({ cardImg }) {
  var settings = {
    arrows: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplaySpeed: 6000,
  };
  return (
    <div className="carouselPh_box">
      <Slider {...settings}>
        {cardImg &&
          cardImg.map((item, index) => (
            <div className="carouselPh_img" key={index}>
              <img
                alt=""
                src={`https://image.tmdb.org/t/p/original${item.file_path}`}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
