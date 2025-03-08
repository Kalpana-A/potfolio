import React from "react";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";
import "./App.css";

import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
      {/* Add other sections here */}
    </div>
  );
};

export default App;
