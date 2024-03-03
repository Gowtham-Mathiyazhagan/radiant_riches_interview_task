import React from "react";
import "./contant.css";
import { contantData } from "./data.js";
const Contant = () => {
  return (
    <div className="contant-container">
      {/* Splited by left, mid, right */}
      {contantData.map((val,i)=>{
return(
  <div className="item">
        <div className="left-item">
          <div className="label">
            <i className={val.trophy}></i>
            &nbsp; {val.label}
          </div>
          <div className="no">{val.no}</div>
          <img src={val.system} alt="" />
          <h6>{val.builder}</h6>
        </div>
        <div className="mid-item cdk">
          <div className="about">
            <span>{val.span}</span>{val.about}</div>
          <h5>Main highlights</h5>
          <p>
           {val.p}
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
            <div className="no">{val.rating_no}</div>
            <p>{val.rating_p}</p>
            <img src={val.img} alt={val.builder} />
          </div>
          <button>View</button>
        </div>
      </div>
)

      })}
    </div>
  );
};

export default Contant;
