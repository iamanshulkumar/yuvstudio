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
              In an industry where the demand for high-quality, imaginative visuals is ever-present, every project presents a unique challenge. Despite possessing advanced technical skills and extensive experience, creating something truly innovative can often feel like navigating through uncharted territory.
            </p>

            <p className="aboutcontenthero">
              We acknowledge that the path to success is filled with obstacles. The journey can be daunting, and there are moments when the end seems out of reach, making it tempting to give up. However, at Yuvmedia Studio, we persevere.
            </p>
          </div>

          <div className="col-lg-6 col-md-8 col-sm-10 col-12 p-md-5 px-4">

            <p className="aboutcontenthero">
              Our mission is to craft unforgettable experiences for our audience and everyone involved in the filmmaking process. We strive to push boundaries and bring visionary ideas to life.
            </p>

            <p className="aboutcontenthero">
              By bridging the gap between imagination and reality through cutting-edge VFX, we aim to deliver an unparalleled sense of wonder. We are committed to spreading this excitement across the globe.
            </p>

            <p className="aboutcontenthero">
              With this vision driving us, we continue to create with passion and dedication every day.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default HeroSection;
