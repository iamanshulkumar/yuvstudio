import React, { useState, useRef } from "react";
import "./Carousel.css"; // Ensure you have the relevant CSS for animation

const HeroSection = () => {
  const [items, setItems] = useState([
    {
      src: "assets/videos/Sliderone.mp4",
      title: "Yuvmedia Studio",
      topic: "VFX & Advertising Co.",
    },
    {
      src: "assets/videos/Slidertwo.mp4",
      title: "Yuvmedia Studio",
      topic: "VFX & Advertising Co.",
    },
    {
      src: "assets/videos/Sliderthree.mp4",
      title: "Yuvmedia Studio",
      topic: "VFX & Advertising Co.",
    },
    {
      src: "assets/videos/sliderfive.mp4",
      title: "Yuvmedia Studio",
      topic: "VFX & Advertising Co.",
    },
  ]);

  // const autoSlideRef = useRef(null);
  const carouselRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  const showSlider = (type) => {
    const carousel = carouselRef.current;
    const nextButton = nextButtonRef.current;
    const prevButton = prevButtonRef.current;
  
    // Disable buttons during animation
    nextButton.style.pointerEvents = "none";
    prevButton.style.pointerEvents = "none";
  
    // Remove existing animation classes
    carousel.classList.remove("next", "prev");
  
    // Trigger reflow to restart animations
    void carousel.offsetWidth;
  
    // Add animation class for carousel
    if (type === "next") {
      carousel.classList.add("next");
    } else {
      carousel.classList.add("prev");
    }
  
    // Update items after the CSS animation ends (1 second delay)
    setTimeout(() => {
      if (type === "next") {
        setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
      } else {
        setItems((prevItems) => [
          prevItems[prevItems.length - 1],
          ...prevItems.slice(0, prevItems.length - 1),
        ]);
      }
  
      // Re-enable buttons after animation ends
      nextButton.style.pointerEvents = "auto";
      prevButton.style.pointerEvents = "auto";
    }, 1000); // Match the CSS transition duration (1 second)
  };
  

  const handleNext = () => {
    showSlider("next");
  };

  const handlePrev = () => {
    showSlider("prev");
  };

  // useEffect(() => {
  //   // Autoplay interval setup
  //   const interval = setInterval(() => {
  //     handleNext(); // Move to the next slide
  //   }, 5000); // Adjust the interval to 5 seconds or any preferred value
  
  //   // Cleanup the interval on unmount
  //   return () => clearInterval(interval);
  // }, []);
  

  return (
    <>
      <marquee
        behavior=""
        direction=""
        loop
        scrolldelay="10"
        className="marqueetext"
      >
        VFX & ADVERTISING CO.
      </marquee>
      <div className="carousel" >
        <div className="list" >
          {items.map((item, index) => (
            <div className="item" key={index} ref={carouselRef}>
              <video
                className="videocustom"
                autoPlay
                muted
                loop
                src={item.src}
              ></video>
              <video
                className="reflection"
                src={item.src}
                autoPlay
                loop
                muted
              ></video>
              <div className="introduce">
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <a href="/advertising">
                  <button className="custombtnshero mt-3">
                    SEE MORE <i className="bi bi-arrow-right ms-3"></i>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows d-none">
          <button id="prev" ref={prevButtonRef} onClick={handlePrev}>
            ❮
          </button>
          <button id="next" ref={nextButtonRef} onClick={handleNext}>
            ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
