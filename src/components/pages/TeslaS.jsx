import React from "react";
import MainBanner from "./CommonComponents/MainBanner";
import "../PagesCss/TeslaS.scss";
import Interor from "./CommonComponents/Interor";
import Swiper from "./CommonComponents/Swiper";
import SplitFeatures from "./CommonComponents/SplitFeatures";
import SpeedFeatures from "./CommonComponents/SpeedFeatures";
import SpeedBanner from './CommonComponents/SpeedBanner';
import BeyondLudicrous from "./CommonComponents/BeyondLudicrous";
function TeslaS() {
  return (
    <div className="tesla-s-sec">
      <MainBanner
        isLastIteam={true}
        bgImg="model-s.jpg"
        title="Model S"
        titleTwo="Plaid"
        bottomGroup={{
          firstItam: "396mi",
          firstItamTwo: "Range (EPA est.)",
          secondIteam: "1.99s",
          secondIteamTwo: "0-60 mph*",
          thirdIteam: "200mph",
          thirdIteamTwo: "Top Speed†",
          fouthIteam: "1,020hp",
          fouthIteamTwo: "Peak Power",
        }}
      />
      <Interor />
      <Swiper />
      <SplitFeatures
        imgOne="https://tesla-cdn.thron.com/delivery/public/image/tesla/9865e92b-731c-4f1a-9430-e984ee0001ca/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop"
        imgTwo="https://tesla-cdn.thron.com/delivery/public/image/tesla/08d2e941-2be2-4e1a-bed9-924ac30fb115/bvlatuR/std/1040x584/MS-Interior-Grid-B-Desktop"
        imgThree="https://tesla-cdn.thron.com/delivery/public/image/tesla/dcfc40cb-6b46-4be7-b173-be10e0c9143c/bvlatuR/std/1040x584/MS-Interior-Grid-C-Desktop"
        imgFour="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop"
        isImageFour={true}
        txtOne="
        Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat."
        txtTwo="
        Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop."
        txtThree="
        A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road."
        txtFour="
        With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too."
      />
      <SpeedFeatures />
      <SpeedBanner
         bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/06e710a1-0428-45e9-8945-580e80d77b55/bvlatuR/std/2880x1800/MS-Performance-Hero-Desktop"
        textOne={{
          h1: "1,020hp",
          p: "Peak power",
        }}

        textTwo={{
          h1 : "9.23s",
          p : "@155 mph 1/4 mile"
        }}

        textThree={{
          h1 : "1.99s",
          p : "0-60 mph*"
        }}
      />
      <BeyondLudicrous />
    </div>
  );
}

export default TeslaS;
