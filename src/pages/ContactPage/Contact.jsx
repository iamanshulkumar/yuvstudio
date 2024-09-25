import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_955ar6g", "template_2qkbpua", form.current, {
        publicKey: "ZpSieWnpQVGRyWwki",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div>
      <div className="container contactsec">
        <div className="row">
          <div className="col-md-6">
            <div className="text-white contactheading mb-3">CONTACT US</div>
            <div className="text-white businessdetailstxt">
              <b>Get in Touch with Yuvmedia Studio</b>
              <p>Interested in learning more about what Yuvmedia Studio can do for you?</p>
              <hr className="hr" />
              <div className="text-white">
                <p>For inquiries about our services, please reach out to us at:</p>
                <div className='phone'>
                <i class="bi bi-envelope"></i><a href="mailto:support@yuvmediastudio.com" className='ms-2'>support@yuvmediastudio.com</a>
                </div>
              </div>
              <hr className="hr" />
            </div>
          </div>
          <div className="col-md-6">

            <div className="contact-container">
              {/* Conditionally show the form or the thank-you message */}
              {!isSubmitted ? (
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="fs-3">
                    Fill the below form For Enquiries.
                  </div>
                  <input type="text" name="name" placeholder="Name *" required />
                  <input type="email" name="email" placeholder="Email *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <select class="form-select " name="service" aria-label="Default select example" required>
                    <option selected>Choose the service: *</option>
                    <option value="Visual Effects">Visual Effects</option>
                    <option value="CGI">CGI</option>
                    <option value="3D Animation">3D Animation</option>
                    <option value="Advertising">Advertising</option>
                  </select>
                  <textarea name="message" placeholder="Message *" required></textarea>
                  <button type="submit">Submit</button>
                </form>
              ) : (
                <div className="thank-you-message bg-success pt-3 pb-2 rounded-3">
                  <h2>Thank you!</h2>
                  <p>Our consultant will contact you soon.</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact