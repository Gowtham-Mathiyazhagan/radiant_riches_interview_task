import React from "react";
import "../Components/headsection.css";
const Headsection = () => {
  return (
      <div className="head-container">
        <div className="head-and-info">
          <h2>Best Website builders in the US</h2>
          <div className="info">
            <span>
              <i class="bi bi-check-circle"></i>
              &nbsp; Last Updated
            </span>
            <span>February 22, 2020</span>
            <span>
              <i class="bi bi-exclamation-circle"></i>
              &nbsp; Advertising Disclosure
            </span>
            <span>
              Top Relevant&nbsp;<i class="bi bi-arrow-down-circle"></i>
            </span>
          </div>
        </div>
        <div className="tools">
          <span>Tools</span>
          <span>AWS Builder</span>
          <span>Start Build</span>
          <span>Build Supplies</span>
          <span>Tooling</span>
          <span>BlueHosting</span>
        </div>
        <nav>
          <span>Home</span>
          <i class="bi bi-chevron-right"></i>
          <span>Hosting for all</span>
          <i class="bi bi-chevron-right"></i>
          <span>Hosting</span>
          <i class="bi bi-chevron-right"></i>
          <span>Hosting6</span>
          <i class="bi bi-chevron-right"></i>
          <span>Hosting5</span>
        </nav>
      </div>
  );
};

export default Headsection;
