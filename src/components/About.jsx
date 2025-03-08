import React from "react";
import myImage from "../assets/img/aboutmeimage.png";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
          {/* <p>Learn more about me</p> */}
        </div>
        <div className="row">
          {/* <div className="col-lg-4" data-aos="fade-right">
                        <img src={myImage} className="img-fluid" alt="" />
                    </div> */}
          <div className="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Sr Web Developer</h3>
            <p>
              I am a highly skilled Web Developer (Software Engineer) with over
              7.5 years of experience, specializing in front-end development. My
              expertise lies in creating responsive landing pages, emailers, and
              user-friendly designs using HTML, CSS, Bootstrap, and JavaScript.
              I am proficient in WordPress CMS, with extensive hands-on
              experience working with popular page builders such as Divi, Visual
              Composer, and Elementor.
            </p>

            <p>
              Additionally, I have knowledge of ReactJS and have successfully
              worked on product development using ReactJS. I am also proficient
              in design tools such as Photoshop and Figma, enabling me to create
              visually appealing and user-friendly interfaces.
            </p>

            <p>
              Furthermore, I have experience in SEO optimization, including
              on-page SEO, technical improvements, and page speed optimization,
              ensuring better search engine visibility and performance.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong>{" "}
                    <a href="mailto:kalpana.gangappa@gmail.com">
                      <span>kalpana.gangappa@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong>{" "}
                    <span>Bengaluru, Karnataka, India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
