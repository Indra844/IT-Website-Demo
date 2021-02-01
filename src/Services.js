import React from "react";
import "./Services.css";
import image4 from "./Image/image4.png";

function Services() {
  return (
    <div className="services">
      <div className="col-12 mx-auto services__banner">
        <div className="service__banner__left">
          <h2>Our Domain Expertise</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            labore eligendi accusantium iusto cum voluptates esse quisquam at
            quas dolores, suscipit voluptatem eius, hic quam ratione quis culpa
            alias harum?
          </p>
        </div>
        <div className="service__banner__right">
          <img src={image4} alt="" />
        </div>
      </div>
      <div className="col-12 mx-auto my-3 services__brand">
        <h3>Services</h3>
      </div>
      <div className="col-10 mx-auto my-3">
        <div className="row services__row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                className="service__image"
                src="https://webmarkinc.com/wp-content/uploads/2019/08/website.jpg"
                alt=""
              />
              <div className="card-body">
                <div className="services__heading">
                  <h2>Website Development</h2>
                </div>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                className="service__image"
                src="https://webmarkinc.com/wp-content/uploads/2019/08/website.jpg"
                alt=""
              />
              <div className="card-body">
                <div className="services__heading">
                  <h2>Webapp Development</h2>
                </div>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                className="service__image"
                src="https://webmarkinc.com/wp-content/uploads/2019/08/website.jpg"
                alt=""
              />
              <div className="card-body">
                <div className="services__heading">
                  <h2>Webapp Development</h2>
                </div>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row services__row">
          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <img
                className="service__image"
                src="https://webmarkinc.com/wp-content/uploads/2019/08/website.jpg"
                alt=""
              />
              <div className="card-body">
                <div className="services__heading">
                  <h4>Website Development</h4>
                </div>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <img
                className="service__image"
                src="https://webmarkinc.com/wp-content/uploads/2019/08/website.jpg"
                alt=""
              />
              <div className="card-body">
                <div className="services__heading">
                  <h4>Web App Development</h4>
                </div>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
