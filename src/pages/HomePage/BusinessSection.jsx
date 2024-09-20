import React, { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const BusinessSection = () => {

  useEffect(() => {
    // Selecting the target element
    const aboutHeading = document.querySelector("#bussniess");

    // Define the GSAP animation for hover
    const hoverAnimation = gsap.to(aboutHeading, {
      duration: 1,
      text: {
        value: "WELCOME TO VFX", // Change to desired text
      },
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
    <div className="container-fluid p-md-5 p-3 businesssec">
      <div className="row">
        <div className="col-md-12">
          <div className="text-white maintextbusiness" id="bussniess">Our business</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-start">
          <div className="text-white businessdetailstxt">Yuvmedia Studio is a production company specializing in high-end VFX production for films, TV series, commercials, and music videos. We work closely with directors, producers, and film crews—the creative forces behind each project. Our strengths lie in offering technical guidance, proposing creative direction ideas, and solving challenges that arise during production.</div>
        </div>
        <div className="col-md-6 text-start">
          <div className="text-white businessdetailstxt">We are a production company specializing in high-end VFX production for films, TV dramas, commercials, and music videos. Our approach is to work closely with the creators—directors, producers, and film crews—providing not only technical advice but also strong creative proposals and problem-solving capabilities, which are our key selling points.</div>
        </div>
      </div>
      <div className="mt-5">
        <a href="/about">
          <button className='custombtns'>ABOUT DETAILS <i className="bi bi-arrow-right ms-3 text-info"></i></button>
        </a>
      </div>
    </div>
  )
}

export default BusinessSection