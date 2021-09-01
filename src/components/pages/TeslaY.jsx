import React from "react";
import BeyondLudicrous from "./CommonComponents/BeyondLudicrous";
import Interor from "./CommonComponents/Interor";
import MainBanner from "./CommonComponents/MainBanner";
import SpeedBanner from "./CommonComponents/SpeedBanner";
import SpeedFeatures from "./CommonComponents/SpeedFeatures";
import SplitFeatures from "./CommonComponents/SplitFeatures";
import Swiper from "./CommonComponents/Swiper";

function TeslaY() {
  return (
    <div className="tesla-y-sec">
      <MainBanner
        isLastIteam={false}
        bgImg="model-y-new.jpg"
        title="Model Y"
        titleTwo="Plaid"
        bottomGroup={{
          firstItam: "76cu ft",
          firstItamTwo: "Cargo Space",
          secondIteam: "326mi",
          secondIteamTwo: "Range (EPA est.)",
          thirdIteam: "AWD",
          thirdIteamTwo: "Dual Motor",
        }}
      />
      <Interor />
      <Swiper />
      <SplitFeatures
        imgOne="https://tesla-cdn.thron.com/delivery/public/image/tesla/9865e92b-731c-4f1a-9430-e984ee0001ca/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop"
        imgTwo="https://tesla-cdn.thron.com/delivery/public/image/tesla/08d2e941-2be2-4e1a-bed9-924ac30fb115/bvlatuR/std/1040x584/MS-Interior-Grid-B-Desktop"
        imgThree="https://tesla-cdn.thron.com/delivery/public/image/tesla/dcfc40cb-6b46-4be7-b173-be10e0c9143c/bvlatuR/std/1040x584/MS-Interior-Grid-C-Desktop"
        imgFour="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop"
        isImageFour={false}
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
         bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/e13368c8-5657-468e-aa16-a28d9dc763c6/bvlatuR/std/2880x1800/MX-Performance-Hero-Desktop"
        textOne={{
          h1: "1,020hp",
          p: "Peak power",
        }}

        textTwo={{
          h1 : "9.9s",
          p : "1/4 mile"
        }}

        textThree={{
          h1 : "2.5s",
          p : "0-60 mph*"
        }}
      />
      <BeyondLudicrous />
    </div>
  );
}

export default TeslaY;
