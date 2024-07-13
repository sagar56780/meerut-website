import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import assets from "../assets/assets";

const Home = () => {
  useEffect(() => {
    // Ensure Bootstrap JavaScript components are initialized
    const bootstrap = require('bootstrap');
    const carouselElement = document.getElementById('meerutCarousel');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement);
    }
  }, []);

  return (
    <div className="home-container">
      <div
        id="meerutCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#meerutCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#meerutCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#meerutCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={assets.img1}
              className="d-block w-100 carousel-image"
              alt="Meerut Attraction 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="caption-title">Attraction 1</h5>
              <p className="caption-text">Description of Attraction 1.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={assets.img2}
              className="d-block w-100 carousel-image"
              alt="Meerut Attraction 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="caption-title">Attraction 2</h5>
              <p className="caption-text">Description of Attraction 2.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={assets.img3}
              className="d-block w-100 carousel-image"
              alt="Meerut Attraction 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="caption-title">Attraction 3</h5>
              <p className="caption-text">Description of Attraction 3.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={assets.img3}
              className="d-block w-100 carousel-image"
              alt="Meerut Attraction 4"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="caption-title">Attraction 4</h5>
              <p className="caption-text">Description of Attraction 4.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={assets.img3}
              className="d-block w-100 carousel-image"
              alt="Meerut Attraction 5"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="caption-title">Attraction 5</h5>
              <p className="caption-text">Description of Attraction 5.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#meerutCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#meerutCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row mt-4">
        <div className="col-md-8">
          <h2>Welcome to Explore Meerut!</h2>
          <p>
            Discover the rich history, vibrant culture, and exciting attractions
            of Meerut.
          </p>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Latest News</h5>
              <p className="card-text">
                Stay updated with the latest news and events in Meerut.
              </p>
              <a href="/local-news" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
