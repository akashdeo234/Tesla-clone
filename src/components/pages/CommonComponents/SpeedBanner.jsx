import React from "react";
import "./speedBanner.css";
function SpeedBanner({ textOne, textTwo, textThree,bgImg }) {
    console.log(bgImg)
  return (
    <div className="speed-banner-sec" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="container">
        <div className="text-wrapper">
          <div className="one">
            <h1>{textOne.h1}</h1>
            <p>{textOne.p}</p>
          </div>
          <div className="two">
            <h1>{textTwo.h1}</h1>
            <p>{textTwo.p}</p>
          </div>
          <div className="three">
            <h1>{textThree.h1}</h1>
            <p>{textThree.p}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeedBanner;
