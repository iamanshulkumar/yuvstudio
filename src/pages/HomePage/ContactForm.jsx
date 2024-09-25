import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
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
        <>
            <div className="contactform">
                <div className="contact-container">
                    <div className="heading-container">
                        <h1 className="animated-heading">Got a project?</h1>
                        <h1 className="animated-heading">Let's talk.</h1>
                        <h4>
                            From planning your narrative to creating the canvas of a flawless
                            campaign. We've got you covered!
                        </h4>
                    </div>

                    {/* Conditionally show the form or the thank-you message */}
                    {!isSubmitted ? (
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
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
        </>
    );
};

export default ContactForm;
