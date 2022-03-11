import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-area my-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-8">
            <h2 className="mb-4">General Enquire</h2>
            <form className="row g-3">
              <div className="col-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                  <div className="input-group-text">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                  <div className="input-group-text">
                    <i className="fas fa-signature"></i>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    aria-label="Last name"
                  />
                  <div className="input-group-text">
                    <i className="fas fa-at"></i>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Phone Number"
                    aria-label="Phone Number"
                  />
                  <div className="input-group-text">
                    <i className="fas fa-mobile"></i>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Write your message..."
                  rows="5"
                ></textarea>
              </div>
              <input type="submit" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
