import React from "react";
import "./contantTwo.css";
import { cardData } from "../data/contant-two";

const ContantTwo = () => {
  return (
    <div className="contantTwo-container">
      <h1>Related deals you might like for</h1>
      <div className="cards">
        {cardData.map((data,i)=>{
          return(
<div key={i.toString()} className="card">
          <img src={data.img} alt="" />
          <div className="dicount">
            <span>{data.dic}</span>
            <span>{data.time}</span>
          </div>
          <h6>{data.build}</h6>
          <p>{data.p}</p>
          <div className="rate">
            <span>{data.rate1}</span>
            <span>{data.rate2}</span>
            <span>{data.rate3}</span>
          </div>
          <button>View</button>
        </div>
          )
        })}
      </div>
    </div>
  );
};

export default ContantTwo;
