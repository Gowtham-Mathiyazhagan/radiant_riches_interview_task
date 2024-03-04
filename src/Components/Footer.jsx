import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-component">
      <div className="categories">
        <h6>Categories</h6>
        <div>Web Builder</div>
        <div>Hosting</div>
        <div>Data Center</div>
        <div>Robotic-Automation</div>
      </div>
      <div className="contant">
        <h6>Contact</h6>
        <div>Contact</div>
        <div>Privacy Policy</div>
        <div>Terms Of Service</div>
        <div>Categories</div>
        <div>About</div>
      </div>
	  <div className="us">United States&nbsp;&nbsp;<i className="bi bi-chevron-down"></i></div>
    </div>
  );
};

export default Footer;
