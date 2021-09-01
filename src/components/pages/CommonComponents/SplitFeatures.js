import React from "react";
import "./SplitFeatures.scss";
function SplitFeatures({
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  isImageFour,
  txtOne,
  txtTwo,
  txtThree,
  txtFour,
}) {
  return (
    <div className="feature-sec">
      <div className="container">
        <div className={isImageFour ? 'grid-wrapper' : 'grid-three-iteam-wrapper'}>
          <div className="grid-iteam">  
            <img src={imgOne} alt="image" />
          </div>
          <div className="grid-iteam txt">
            <h1>Game from Anywhere</h1>
            <p>{txtOne}</p>
          </div>
          <div className="grid-iteam txt">
            <h1>Stay Connected</h1>
            <p>{txtTwo}</p>
          </div>
          <div className="grid-iteam">
            <img src={imgTwo} alt="image" />
          </div>
          <div className="grid-iteam">
            <img src={imgThree} alt="image" />
          </div>
          <div className="grid-iteam txt">
            <h1>Your Best Audio System</h1>
            <p>{txtThree}</p>
          </div>
          {isImageFour && (
            <div className="grid-iteam txt">
              <h1>Real Storage</h1>
              <p>{txtFour}</p>
            </div>
          )}
          {isImageFour && (
            <div className="grid-iteam">
              <img src={imgFour} alt="image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SplitFeatures;
