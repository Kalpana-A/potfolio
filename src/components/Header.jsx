import React, { useEffect } from "react";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import PureCounter from "@srexi/purecounterjs";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "glightbox/dist/css/glightbox.css";

const Header = () => {
  useEffect(() => {
    // Function to select elements
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    // Function to add event listeners
    const on = (type, el, listener, all = false) => {
      const selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    // Mobile nav toggle
    on("click", ".mobile-nav-toggle", function () {
      select("#navbar").classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    // Scroll with offset on links with a class name .scrollto
    on(
      "click",
      "#navbar .nav-link",
      function (e) {
        const section = select(this.hash);
        if (section) {
          e.preventDefault();

          const navbar = select("#navbar");
          const header = select("#header");
          const sections = select("section", true);
          const navlinks = select("#navbar .nav-link", true);

          navlinks.forEach((item) => {
            item.classList.remove("active");
          });

          this.classList.add("active");

          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            const navbarToggle = select(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
          }

          if (this.hash === "#header") {
            header.classList.remove("header-top");
            sections.forEach((item) => {
              item.classList.remove("section-show");
            });
            return;
          }

          if (!header.classList.contains("header-top")) {
            header.classList.add("header-top");
            setTimeout(() => {
              sections.forEach((item) => {
                item.classList.remove("section-show");
              });
              section.classList.add("section-show");
            }, 350);
          } else {
            sections.forEach((item) => {
              item.classList.remove("section-show");
            });
            section.classList.add("section-show");
          }
        }
      },
      true
    );

    // Portfolio isotope and filter
    const portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      const portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach((el) => {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
        },
        true
      );
    }

    // Initiate portfolio lightbox
    const portfolioLightbox = GLightbox({
      selector: ".portfolio-lightbox",
    });

    // Initiate portfolio details lightbox
    const portfolioDetailsLightbox = GLightbox({
      selector: ".portfolio-details-lightbox",
      width: "90%",
      height: "90vh",
    });

    // Portfolio details slider
    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });

    // Initiate Pure Counter
    new PureCounter();
  }, []);

  // ✅ Waypoint should be initialized in a separate useEffect
  useEffect(() => {
    const skillsContent = document.getElementById("skills-content");

    if (skillsContent && window.Waypoint) {
      new window.Waypoint({
        element: skillsContent,
        offset: "80%",
        handler: function () {
          console.log("Waypoint triggered!");
        },
      });
    }
  }, []);

  return (
    <header id="header">
      <div className="container">
        <h1>Kalpana G</h1>
        <h2>
          I'm a passionate <span>web developer</span> from Bengaluru, Karnataka,
          India
        </h2>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link active" href="#header">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/kalpana-g-71b600a2/"
            target="_blank"
            className="linkedin"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
