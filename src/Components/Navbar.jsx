import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    //Main container to wrap the elemets
    <div className="nav-container">
      <nav>
        <div className="input-group">
          <button>
            <i className="bi bi-search"></i>
          </button>
          <input type="text" />
        </div>
        <span>Categories</span>
        <span>Website Builders</span>
        <span>Today's deals</span>
        <div className="mobile-respons">
        <i className={show ? "bi bi-x-lg" : "bi bi-list"} onClick={()=>setShow(!show)}></i>
        <div className="mobile-list" style={show ? {opacity:"1"} : {opacity:"0"}}>
        <div>Categories</div>
        <div>Website Builders</div>
        <div>Today's deals</div>
      </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
