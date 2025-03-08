const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>
                Bachelor of Engineering in Information Science Engineering
              </h4>
              <h5>2011 - 2015</h5>
              <p>
                <em>
                  Dayananda Sagar Academy of Technology and Management,
                  Bengaluru, Karnataka
                </em>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Web development strategist</h4>
              <h5>2020 - 2024</h5>
              <p>
                <em>
                  Pink Lemonade Communications Pvt Ltd, Bengaluru, Karnataka{" "}
                </em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Web Developer</h4>
              <h5>2018 - 2020</h5>
              <p>
                <em>DigiMark Agency, Bengaluru, Karnataka</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Web designer and Developer</h4>
              <h5>2016 - 2018</h5>
              <p>
                <em>Robert India, Bengaluru, Karnataka</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
