import React from "react";

const HeroSection = () => {
  return (
    <>
      {/* ABOUT US SECTION */}
      <div className="container-fluid  my-4  px-lg-5 px-md-4 px-sm-3 px-2">
        <div className="row">
          <div className="aboutheadings  mb-4  text-center">Our Story</div>
          <div className="col-lg-6 col-md-8 col-sm-10 col-12 p-md-5 px-4">
            <p className="aboutcontenthero">
              We believe that every shot we make should effectively advance the story's direction and provide memorable images that will stick with the audience long after they have finished viewing.</p>

            <p className="aboutcontenthero">
              Our greatest asset is our dedicated team of creative experts who collaborate to bring magic to life on film. Together we have met some of the most challenging deadlines while maintaining a high standard of quality.
            </p>
            <p className="aboutcontenthero">
              <q className="text-white">
                Cinema is truth 24 frames per second.</q> - Jean-Luc Godard.
            </p>

          </div>

          <div className="col-lg-6 col-md-8 col-sm-10 col-12 p-md-5 px-4">

            <p className="aboutcontenthero">
              Bring enchantment to your images with our one-stop store for all things related to visual effects. Modify your existing elements or make realistic ones from the start, then combine them into your frame.
            </p>

            <p className="aboutcontenthero">
              Take total command of your visual effects pipeline with our VFX supervision services.
            </p>

            <p className="aboutcontenthero">
              To save time and money while filming and post-production, our VFX supervisors assist you in planning every aspect of your production, starting in pre-production.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="fs-1 text-white mb-4  text-center" style={{fontFamily: "Fjalla One" }}>Our Business</div>
          <div className="aboutheadings  mb-4  text-center">Welcome to Yuvmedia Studio</div>
          <div className="col-lg-6 col-md-8 col-sm-10 col-12 p-md-5 px-4">
            <p className="aboutcontenthero">
            Where creativity meets precision. We specialize in delivering high-end visual effects for films, television dramas, commercials, and music videos. Our commitment to excellence ensures that every frame is crafted with care and attention to detail.</p>

            <p className="aboutcontenthero">
            At Yuvmedia Studio, we believe in close collaboration with the creative visionaries—directors, producers, and film crews—who shape each project. We bring not only our technical expertise to the table but also innovative creative direction, ensuring that challenges are met with solutions and ideas that push the boundaries of what’s possible.
            </p>
          </div>

          <div className="col-lg-6 col-md-8 col-sm-10 col-12 p-md-5 px-4">

            <p className="aboutcontenthero">
            Our team thrives on solving production hurdles while providing cutting-edge visual effects, making your vision a vivid reality. Whether you're looking for seamless integration of VFX or bold, imaginative sequences, Yuvmedia Studio is your partner in visual storytelling.
            </p>

            <p className="aboutcontenthero fw-bold">
            Creates transportive experiences that entertain, inform, and inspire. 

            </p>

          </div>
        </div>
      </div>

    </>
  );
};

export default HeroSection;
