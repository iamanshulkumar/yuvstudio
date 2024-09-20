import React, { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
const imgsrc = "assets/images/office-banner.jpg";

const JoinSection = () => {
  useEffect(() => {
    // Selecting the target element
    const aboutHeading = document.querySelector(".joinusheadingtxt");

    // Define the GSAP animation for hover
    const hoverAnimation = gsap.to(aboutHeading, {
      duration: 1,
      scale: 1.2, // Scale up for bounce effect
      x: 100,
      ease: "bounce.out", // Apply bounce easing
      paused: true, // Pause the animation initially
    });

    // Add event listeners for mouse enter and leave
    aboutHeading.addEventListener("mouseenter", () => hoverAnimation.play());
    aboutHeading.addEventListener("mouseleave", () => hoverAnimation.reverse());

    // Cleanup event listeners on component unmount
    return () => {
      aboutHeading.removeEventListener("mouseenter", () =>
        hoverAnimation.play()
      );
      aboutHeading.removeEventListener("mouseleave", () =>
        hoverAnimation.reverse()
      );
    };
  }, []);
  return (
    <div className="container-fluid p-0 joinsec">
      <div className="row">
        <div className="col-md-12"
          style={{
            backgroundImage: `url(${imgsrc})`, // Use background image
            backgroundSize: "cover", // Cover the entire div
            backgroundPosition: "center", // Center the image
            height: "50vh", // Full height section
            display: "flex",
            alignItems: "center", // Vertically center content
            justifyContent: "center", // Horizontally center content
          }}>
          <div className="" >
            <div className="row d-flex">
              <div className="col-md-6 text-white ps-5 joinusheadingtxt">JOIN US</div>
              <div className="col-md-6 text-white ps-5 joinustxt">
                Yuvmedia Studio is the visual effect company
                for the feature film, TV,
                advertising and music industries
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default JoinSection;
