import React from "react";
let logo = "/assets/images/logofinalfinalfinal.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid text-white py-5">
        <div className="row px-5 py-4 footercustom">
          <div className="col-md-4 col-12 text-center text-md-start mb-4 mb-md-0">
            <img src={logo} width="180px" alt="logo" />
            <p className="fs-4 mt-3">Bringing Your Visual Dreams to Life.</p>
          </div>
          <div className="col-md-4 col-12 text-start mb-4 mb-md-0">
            <div className="footernav">
              <div>
                <a href="/" className="text-white">Home</a>
              </div>
              <div>
                <a href="/about" className="text-white">About</a>
              </div>
              <div>
                <a href="/advertising" className="text-white">Advertising</a>
              </div>
              <div>
                <a href="/contact" className="text-white">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 text-start">
            <div className="footernav">
              <div>
                <a href="https://www.instagram.com/yuvmediastudio" className="text-white"><i className="bi bi-instagram"></i> Instagram</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/company/104435731" className="text-white"> <i className="bi bi-linkedin"></i> Linkdin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center text-white pt-3 pb-3">
        @2024 YUVMEDIA STUDIO All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
