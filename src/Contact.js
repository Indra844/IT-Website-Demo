import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__heading">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact__form">
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
