// src/components/Services.js

import React from "react";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>My Services</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-code"></i>
              </div>
              <h4>Custom Front-End Development</h4>
              <p>
                Responsive, user-friendly designs using HTML, CSS, Bootstrap,
                and Javascript.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-wordpress"></i>
              </div>
              <h4>WordPress Development</h4>
              <p>
                Custom themes, and page-building with tools like Divi,
                Elementor, and Visual Composer.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-react"></i>
              </div>
              <h4>React JS</h4>
              <p>
                Custom React components, reusable UI elements, and performance
                optimizations tailored to business needs.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-laptop"></i>
              </div>
              <h4>Cross-Browser Compatibility</h4>
              <p>
                Ensuring your website works seamlessly on all modern browsers
                and devices.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file-find"></i>
              </div>
              <h4>SEO optimization</h4>
              <p>
                SEO optimization, on-page enhancements, and page speed
                improvements tailored to business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
