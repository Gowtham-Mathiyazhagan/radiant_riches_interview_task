import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    //Main container to wrap the elemets
    <div className="nav-container">
      <nav>
        <div className="input-group">
          <button>
            <i className="bi bi-search"></i>
          </button>
          <input type="text" onClick={() => setIcon(false)} />
        </div>
        <span>Categories</span>
        <span>Website Builders</span>
        <span>Today's deals</span>
      </nav>
    </div>
  );
};

export default Navbar;
