"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import image1 from "../public/pexels-photo.jpeg"; // Import images using ES modules
import image2 from "../public/pexels-photo-627901.webp";
import image3 from "../public/pexels-photo-4464815.webp";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const sliderData = [
    {
      id: 0,
      img: image1, // Direct image import
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$15",
    },
    {
      id: 1,
      img: image2,
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$20",
    },
    {
      id: 2,
      img: image3,
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];

  return (
    <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
        {sliderData.map((item) => (
          <Slide
            key={item.id}
            img={item.img.src} // Use img.src to reference the image correctly
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
