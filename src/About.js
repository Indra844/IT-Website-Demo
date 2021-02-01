import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container about my-2 col-10 mx-auto">
      <div className="about__heading ">
        <h1 className="about__tag">About Us</h1>
      </div>

      <div className="row">
        <div className="col-lg-6 order-2 order-lg-1 about__page">
          <div className="home__tags">
            <h1>
              Welcome to know more about
              <strong className="brand__name"> IndraTech</strong>
            </h1>
            <h2 className="my-3">
              We are the team of developers stand for you and with you.
            </h2>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <img
            className="home__image "
            src="https://images.financialexpress.com/2020/04/1-534.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="about__stories">
        <h3>Our Stories</h3>
      </div>
      <div className="row featurette my-1 about__info">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Oh yeah, it’s that good.{" "}
            <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="about__image1"
            src="https://blog.wisdominfosoft.com/wp-content/uploads/2020/05/it-service.png"
            alt=""
          />
        </div>
      </div>
      <div className="row featurette my-5 about__info">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            First featurette heading.{" "}
            <span className="text-muted">It’ll blow your mind.</span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="about__image"
            src="https://blog.wisdominfosoft.com/wp-content/uploads/2020/05/it-service.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
