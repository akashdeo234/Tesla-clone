import React from "react";
import './SwiperCustom.scss';
import { Carousel } from "react-bootstrap";
function Swiper() {
  return (
    <div className="swiper">
      <Carousel className="swiper-wrapper">
        <Carousel.Item className="solo-slides">
          <img
            className="d-block"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/4004169e-394f-411a-a5e6-4c5a1fb60095/bvlatuR/std/840x560/MS-Interior-Carousel-B-Mobile"
            alt="First slide"
            
          />
        </Carousel.Item>
        <Carousel.Item className="solo-slides">
          <img
            className="d-block "
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2a7b8898-d56d-47d9-9f0c-916cc2e4a279/bvlatuR/std/840x472/MS-Interior-Grid-A-Mobile"
            alt="Second slide"
           
          />
        </Carousel.Item>
        <Carousel.Item className="solo-slides">
          <img
            className="d-block"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/10b6341b-c5b4-4d63-9b85-927ea5174cc7/bvlatuR/std/840x560/MS-Interior-Carousel-A-Mobile"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Swiper;
