import React, { useState, useEffect } from "react";
import banner_mens from "../Assets/Frontend_Assets/banner_mens.png";
import banner_women from "../Assets/Frontend_Assets/banner_women.png";
import banner_kids from "../Assets/Frontend_Assets/banner_kids.png";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [banner_mens, banner_women, banner_kids];

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [banners.length]); // Add banners.length as dependency

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="banner-section">
      <div 
        className="banner-container" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="banner-item">
            <img src={banner} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="slider-nav">
        <button className="slider-button" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="slider-button" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="slider-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Slider;
