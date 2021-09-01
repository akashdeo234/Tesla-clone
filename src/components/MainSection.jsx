import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
function MainSection({ title, description, bgImg, leftBtn, rightBtn, footer }) {
  return (
    <Wrap bgImg={bgImg}>
      <Fade>
        <IteamText>
          <h1>{title}</h1>
          <h5>{description}</h5>
        </IteamText>
      </Fade>
      <Fade>
        <BtnWrapper>
          <a href="#">{leftBtn}</a>
          {rightBtn && <a href="#">{rightBtn}</a>}
        </BtnWrapper>
      </Fade>
      <Bounce>
        <DownArrow src="/images/down-arrow.svg" />
      </Bounce>
      {footer && <p>{footer}</p>}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .arrow-down {
    font-size: 47px;
    margin-bottom: 15px;
  }

  p {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 5px;
    margin-bottom: 16px;
  }
`;
const IteamText = styled.div`
  padding-top: 10vh;
  text-align: center;

  h1 {
    font-size: 40px;
    letter-spacing: 2px;
    line-height: 65px;
  }
  h5 {
    font-weight: 500;
    font-size: 17px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  padding: 430px 0 0 0;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  a {
    background: white;
    padding: 17px 90px;
    border-radius: 40px;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }
  a:nth-child(1) {
    background: #393c41;
    color: white;
  }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
`;
export default MainSection;
