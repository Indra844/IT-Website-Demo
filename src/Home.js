import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import image1 from "./Image/image1.png";
import image2 from "./Image/image2.png";
import image3 from "./Image/image3.png";
function Home() {
  return (
    <div className="Home">
      <div className="container home my-5">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 home__page">
            <div className="home__tags">
              <h1>
                Welcome to get best With
                <strong className="brand__name"> IndraTech</strong>
              </h1>
              <h2 className="my-3">
                We provide you the best services with best developers.
              </h2>
              <NavLink
                to="/service"
                className="btn btn-primary mt-3 home__button"
              >
                Get Started
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 image__container">
            <img
              className="home__image "
              src="https://www.softfeed.in/wp-content/uploads/2019/02/6-Best-Indian-Information-Technology-IT-companies.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="service">
        <h1>Extermely End Results</h1>
      </div>
      <div className="result_block">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img className="result" src={image1} alt="" />

              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img className="result" src={image2} alt="" />

              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img className="result" src={image3} alt="" />

              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-4">
          <div className="col">
            <div className="card shadow-sm">
              <img className="result" src={image1} alt="" />

              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img className="result" src={image2} alt="" />

              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img className="result" src={image3} alt="" />

              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chooseus_block">
        <h1>Why Choose Us</h1>
      </div>
      <div className="result_block">
        <div className="row">
          <div className="col-lg-4 choose_us">
            <img
              className="chooseus__icon"
              src="https://t4.ftcdn.net/jpg/03/49/51/91/360_F_349519122_7NZ9ob394nkemvPzVgf0JoA1SRuSByL9.jpg"
              alt=""
            />

            <h2>Genuine</h2>
            <p>I mean what I say and do.</p>
            <p>I own my mistakes and weaknesses</p>
          </div>
          <div className="col-lg-4 choose_us">
            <img
              className="chooseus__icon"
              src="https://static.thenounproject.com/png/689318-200.png"
              alt=""
            />

            <h2>Centric</h2>
            <p>I value collaboration and teamwork.</p>
            <p>Happiness, fulfillment, and growth of people matter to me.</p>
          </div>
          <div className="col-lg-4 choose_us">
            <img
              className="chooseus__icon"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/on-time-delivery-2-680947.png"
              alt=""
            />

            <h2>On time delivery</h2>
            <p>I work with a nimble mindset.</p>
            <p>I do whatever it takes to meet the customer needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
