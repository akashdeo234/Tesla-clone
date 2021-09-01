import React from "react";
import MainSection from "./MainSection";


function Hero() {

  return (
    <div className="hero">
      <MainSection
        title="Model X "
        description="Order Online for Touchless Delivery"
        bgImg="model-x.jpg"
        leftBtn="CUSTOM ORDER"
        rightBtn="Existing Inventory"
      />

      <MainSection
        title="Model Y "
        description="Order Online for Touchless Delivery"
        bgImg="model-y.jpg"
        leftBtn="CUSTOM ORDER"
        rightBtn="Existing Inventory"
      />
      <MainSection
        title="Model S "
        description="Order Online for Touchless Delivery"
        bgImg="model-s.jpg"
        leftBtn="CUSTOM ORDER"
        rightBtn="Existing Inventory"
      />
      <MainSection
        title="Solar Panel"
        description="Order Online for Touchless Delivery"
        bgImg="solar-panel.jpg"
        leftBtn="CUSTOM ORDER"
        rightBtn="Existing Inventory"
      />
      <MainSection
        title="Solar Roof"
        description="Order Online for Touchless Delivery"
        bgImg="solar-roof.jpg"
        leftBtn="CUSTOM ORDER"
        rightBtn="Existing Inventory"
      />
      <MainSection
        title="Accessories"
        bgImg="accessories.jpg"
        leftBtn="SHOP NOW"
        footer="CREATED BY AKASH"
      />
    </div>
  );
}

export default Hero;
