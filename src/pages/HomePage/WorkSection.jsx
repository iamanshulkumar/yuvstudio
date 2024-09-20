import React from "react";
import Slider from "react-slick";
import "./Workslider.css";

// Import images
const images = [
  "assets/images/posters/The Witcher.png",
  "assets/images/posters/House of Dragons.png",
  "assets/images/posters/Resident Evil.jpg",
  "assets/images/posters/The women & The Sea.png",
  "assets/images/posters/Rebel Moon.png",
  "assets/images/posters/Mirzapur.png",
  "assets/images/posters/12th Fail.png",
  "assets/images/posters/Fukery 3.png",
  "assets/images/posters/Stranger things.png"
];

const WorkSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className="container-fluid p-md-5 p-3">
      <div className="row">
        <div className="worksection">Our Work</div>
        <div>
          <Slider {...settings}>
            {images.map((imgSrc, imgIndex) => (
              <figure className="workimg" key={imgIndex}>
                <img
                  src={imgSrc}
                  className="rounded-3"
                  alt={`Gallery Images ${imgIndex}`}
                />
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
