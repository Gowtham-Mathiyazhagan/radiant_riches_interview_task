import React from "react";
import "./contant.css";
import { contantData } from "./data.js";
const Contant = () => {
  return (
    <div className="contant-container">
      {/* Splited by left, mid, right */}
      {contantData.map((val,i)=>{
return(
  
)

      })}
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
        <div className="mid-item cdk">
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
          {/* The .cdj-details determine when it is going to show */}
          {/* <div className="cdk-details">
			<div className="percentage">26% Off</div>
            <h5>Main highlights</h5>
            <div className="cdk-rate">
              <div>
                <span>9.9</span>&nbsp;building responsive
              </div>
              <div>
                <span>8.9</span>&nbsp;Cool
              </div>
              <div>
                <span>8.9</span>&nbsp;Docs
              </div>
            </div>
            <div className="cdk-review">
              <h6>Why we love it</h6>
              <div className="reviews">
                <div>
                  <i class="bi bi-check-lg"></i>&nbsp;Documentation
                </div>
                <div>
                  <i class="bi bi-check-lg"></i>&nbsp;Easy Use
                </div>
                <div>
                  <i class="bi bi-check-lg"></i>&nbsp;Out of box
                </div>
              </div>
            </div>
          </div> */}
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
