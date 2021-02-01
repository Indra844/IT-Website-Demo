import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__contact">
        <h3>Contact Info</h3>
        <p>
          Address:<span>Rajdhanwar, Dist:-Giridih, Jharkhand-825412</span>
        </p>
        <p>
          Mobile No:- <span>8235464412</span>
        </p>
        <p>
          Email:- <span>indratech@gmail.com</span>
        </p>
        <p>
          Support:- <span>support@indratech.com</span>
        </p>
      </div>
      <div className="footer__links">
        <h3> Links</h3>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/service">
          <p>Services</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <div className="footer__otherLinks">
        <h3>Other Links</h3>
        <Link to="/">
          <p>Privacy Policy</p>
        </Link>
        <Link to="/">
          <p>Disclamier</p>
        </Link>
        <Link to="/">
          <p> Career</p>
        </Link>
      </div>
      <div className="footer__social">
        <h3>Follow Us</h3>
        <div className="footer__social__icons">
          <p>FB</p>
          <p>INSTA</p>
          <p>LI</p>
          <p>YT</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
