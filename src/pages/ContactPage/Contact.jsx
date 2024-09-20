import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container contactsec">
        <div className="row">
          <div className="col-md-12">
            <div className="text-white contactheading">CONTACT US</div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-start">
            <div className="text-white businessdetailstxt">
              For immediate assistance or to discuss your project over the phone, please don’t hesitate to drop us an email. Our team is ready to provide you with the information you need.
            </div>
          </div>
        </div>
        {/* <hr className="hr" /> */}
        {/* <div className="col-md-12">
          <div className="text-white phone">
            <div>
              For phone inquiries
            </div>
            <a href="#">TEL: +91-0000000000</a>
          </div>
        </div> */}
        <hr className="hr" />
        <div className="col-md-12">
          <div className="text-white phone">
            <div>
              Email Us at: 
            </div>
            <a href="mailto:support@yuvmediastudio.com">support@yuvmediastudio.com</a>
          </div>
        </div>
        <hr className="hr" />
      </div>
    </div>
  )
}

export default Contact