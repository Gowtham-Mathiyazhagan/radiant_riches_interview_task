import React from "react";
import img from "../assets/img.jpg";
import img2 from '../assets/IMAGE.jpg'
import "./contant.css";
const Contant = () => {
  return (
    <div className="contant-container">
      {/* Splited by left, mid, right */}
      <div className="item">
        <div className="left-item">
          <div className="label">
            <i className="bi bi-trophy"></i>
            &nbsp; Best Choice
          </div>
          <div className="no">1</div>
          <img src={img} alt="" />
          <h6>Builder 1</h6>
        </div>
        <div className="mid-item">
          <div className="about">
            <span>WixPro 72-Inch Responsive Website Builder</span>-
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </div>
          <h5>Main highlights</h5>
          <p>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <div className="see-more">
            Show more&nbsp;<i className="bi bi-chevron-down"></i>
          </div>
        </div>
        <div className="right-item">
          <div className="rating-card">
            <div className="no">9.8</div>
			<p>Exceptional</p>
			<img src={img2} alt="" />
          </div>
		  <button>View</button>
        </div>
      </div>
    </div>
  );
};

export default Contant;
