import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../Styles/Carousel.css";
import Navigation from "./Navigation";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
  "/img13.jpg",
  "/img14.jpg",
  "/img15.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navigation home={true} />
      <div className="home-container">
        <div className="carousel-container">
          <div
            className="carousel-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={"/Musium" + img}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            ))}
          </div>
          <button onClick={prevSlide} className="carousel-button left">
            <FaArrowLeft size={20} />
          </button>
          <button onClick={nextSlide} className="carousel-button right">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
