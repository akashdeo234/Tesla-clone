import React from "react";
import styled from "styled-components";
function MainBanner({ bgImg, title, titleTwo, bottomGroup,isLastIteam }) {
  return (
    <Wrap className="banner" bgImg={bgImg}>
      <Title>
        <h1>{title}</h1>
        <p>{titleTwo}</p>
      </Title>
      <BottomGroup>
        <div className="iteam one">
          <h4>{bottomGroup.firstItam}</h4>
          <p>{bottomGroup.firstItamTwo}</p>
        </div>
        <div className="iteam two">
          <h4>{bottomGroup.secondIteam}</h4>
          <p>{bottomGroup.secondIteamTwo}</p>
        </div>
        <div className="iteam three">
          <h4>{bottomGroup.thirdIteam}</h4>
          <p>{bottomGroup.thirdIteamTwo}</p>
        </div>
        {isLastIteam ? (
          <div className="iteam four">
            <h4>{bottomGroup.fouthIteam}</h4>
            <p>{bottomGroup.fouthIteamTwo}</p>
          </div>
        ): ''}
        <a href="#" className="btn">
          ORDER NOW
        </a>
      </BottomGroup>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  overflow: hidden;
  height: 95vh;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27vh;
  flex-direction: column;

  h1 {
    font-size: 40px;
    font-weight: 700;
  }
  p {
    font-weight: 300;
  }
  a {
    border: 3px solid white;
    padding: 12px 28px;
    border-radius: 22px;
  }
`;

const BottomGroup = styled.div`
  width: 60%;
  align-items: center;
  text-align: center;
  left: 50;
  transform: translateX(38%);
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 50px;
  margin: 0 auto;

  h4,
  a,
  p {
    color: white;
    letter-spacing: 1px;
  }
  h4 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  p {
    font-size: 12px;
    font-weight: 600;
  }
  .btn {
    font-size: 10px;
    font-weight: 800;
    border: 3px solid white;
    padding: 10px 43px;
    border-radius: 22px;
    cursor: pointer;
  }
`;
export default MainBanner;
