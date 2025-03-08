// src/components/Portfolio.js

import React, { useEffect } from "react";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import PureCounter from "@srexi/purecounterjs";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "glightbox/dist/css/glightbox.css";
// import Waypoint from 'waypoints/lib/noframework.waypoints';
import sigmaventures from "../assets/img/portfolio/sigmaventures.png";
import ascendion from "../assets/img/portfolio/ascendion.png";
import VoyaIndia from "../assets/img/portfolio/VoyaIndia.png";
import Processvenue from "../assets/img/portfolio/Processvenue.png";
import Collins from "../assets/img/portfolio/Collins.png";
import skateisi from "../assets/img/portfolio/skateisi.png";
import nowakgroup from "../assets/img/portfolio/nowakgroup.png";
import mslgroupinc from "../assets/img/portfolio/mslgroupinc.png";
import recruitingboostexposure from "../assets/img/portfolio/recruitingboostexposure.png";
import grantspass from "../assets/img/portfolio/grantspass.png";
import aumbrestory from "../assets/img/portfolio/aumbrestory.png";
import lifecykel from "../assets/img/portfolio/lifecykel.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-wp">WordPress</li>
              <li data-filter=".filter-shopify">Shopify</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container isotope-container">
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-wp">
            <div className="portfolio-wrap">
              <img
                src={sigmaventures}
                className="img-fluid"
                alt="sigmaventures"
              />
              <div className="portfolio-info">
                <h4>Sigma Ventures</h4>
                <p>
                  A modern and responsive WordPress website built to showcase
                  Sigma Ventures' services and expertise. It features a clean
                  design, user-friendly navigation, and optimized performance
                  for a seamless browsing experience.
                </p>
                <div className="portfolio-links">
                  <a href="https://sigmaventures.in/" target="_blank">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-wp">
            <div className="portfolio-wrap">
              <img src={ascendion} className="img-fluid" alt="ascendion" />
              <div className="portfolio-info">
                <h4>Ascendion</h4>
                <p>
                  A dynamic and responsive WordPress website crafted to
                  highlight Ascendion’s innovative solutions and services. The
                  site combines sleek design, intuitive navigation, and robust
                  performance to deliver an engaging user experience.
                </p>
                <div className="portfolio-links">
                  <a href="https://ascendion.com/" target="_blank">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-wp">
            <div className="portfolio-wrap">
              <img src={VoyaIndia} className="img-fluid" alt="Voya India" />
              <div className="portfolio-info">
                <h4>Voya India</h4>
                <p>
                  A sleek and responsive WordPress website designed to showcase
                  Voya India’s premium travel services. The site features a
                  modern layout, smooth navigation, and optimized performance
                  for an immersive user experience.
                </p>
                <div className="portfolio-links">
                  <a href="https://www.voyaindia.com/" target="_blank">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-shopify">
            <div className="portfolio-wrap">
              <img src={aumbrestory} className="img-fluid" alt="aumbrestory" />
              <div className="portfolio-info">
                <h4>Aumbre Story</h4>
                <p>
                  A visually appealing and responsive Shopify website designed
                  to showcase Aumbre Story’s products. The site features an
                  elegant design, seamless shopping experience, and optimized
                  performance for an enhanced user journey.
                </p>
                <div className="portfolio-links">
                  <a href="https://aumbrestory.com/" target="_blank">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-wp">
            <div className="portfolio-wrap">
              <img
                src={Processvenue}
                className="img-fluid"
                alt="ProcessVenue"
              />
              <div className="portfolio-info">
                <h4>ProcessVenue</h4>
                <p>
                  A professional and responsive WordPress website developed to
                  highlight Process Venue’s business solutions. It features a
                  clean design, intuitive navigation, and optimized performance
                  for a seamless user journey.
                </p>
                <div className="portfolio-links">
                  <a href="https://www.processvenue.com/" target="_blank">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-wp">
            <div className="portfolio-wrap">
              <img src={Collins} className="img-fluid" alt="Collins" />
              <div className="portfolio-info">
                <h4>Collins India</h4>
                <p>
                  A modern and responsive WordPress website designed to showcase
                  Collins India’s products and services. The site features a
                  user-friendly interface, smooth navigation, and optimized
                  performance for an enhanced browsing experience.
                </p>
                <div className="portfolio-links">
                  <a href="https://collins.in/" target="_blank">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-wp">
            <div className="portfolio-wrap">
              <img src={skateisi} className="img-fluid" alt="skateisi" />
              <div className="portfolio-info">
                <h4>Skate ISI</h4>
                <p>
                  A visually engaging and responsive WordPress website developed
                  to promote Skate ISI’s mission and activities. The site
                  features a modern design, easy navigation, and optimized
                  performance for an interactive user experience.
                </p>
                <div className="portfolio-links">
                  <a href="https://www.skateisi.org/" target="_blank">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-shopify">
            <div className="portfolio-wrap">
              <img src={lifecykel} className="img-fluid" alt="lifecykel" />
              <div className="portfolio-info">
                <h4>Life Cykel India</h4>
                <p>
                  A sleek and responsive Shopify website developed to showcase
                  Life Cykel’s products. The site offers an intuitive design,
                  smooth navigation, and optimized shopping experience for a
                  seamless user journey.
                </p>
                <div className="portfolio-links">
                  <a href="https://in.lifecykel.com/" target="_blank">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-wp">
            <div className="portfolio-wrap">
              <img src={nowakgroup} className="img-fluid" alt="nowakgroup" />
              <div className="portfolio-info">
                <h4>The Nowak Group RE</h4>
                <p>
                  A professional and responsive WordPress website designed to
                  highlight The Nowak Group RE's real estate services. The site
                  offers a clean design, intuitive navigation, and optimized
                  performance for an enhanced user experience.
                </p>
                <div className="portfolio-links">
                  <a href="https://thenowakgroupre.com/" target="_blank">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-wp">
            <div className="portfolio-wrap">
              <img src={mslgroupinc} className="img-fluid" alt="mslgroupinc" />
              <div className="portfolio-info">
                <h4>MSL Group Inc.</h4>
                <p>
                  A clean and responsive WordPress website developed to showcase
                  MSL Group Inc.'s services and expertise. The site features an
                  intuitive layout, smooth navigation, and optimized performance
                  for a seamless user experience.
                </p>
                <div className="portfolio-links">
                  <a href="http://www.mslgroupinc.com/" target="_blank">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-wp">
            <div className="portfolio-wrap">
              <img
                src={recruitingboostexposure}
                className="img-fluid"
                alt="recruitingboostexposure"
              />
              <div className="portfolio-info">
                <h4>Recruiting Boost Exposure</h4>
                <p>
                  A modern and responsive WordPress website designed to
                  highlight Recruiting Boost Exposure's recruitment services.
                  The site features a sleek design, user-friendly navigation,
                  and optimized performance for an engaging user experience.
                </p>
                <div className="portfolio-links">
                  <a
                    href="https://recruitingboostexposure.com/"
                    target="_blank"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-wp">
            <div className="portfolio-wrap">
              <img src={grantspass} className="img-fluid" alt="grantspass" />
              <div className="portfolio-info">
                <h4>Grants Pass</h4>
                <p>
                  A responsive and visually appealing WordPress website
                  developed to showcase Grants Pass and its offerings. The site
                  features a clean design, intuitive navigation, and optimized
                  performance for an enhanced user experience.
                </p>
                <div className="portfolio-links">
                  <a href="https://grantspass.com/" target="_blank">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
