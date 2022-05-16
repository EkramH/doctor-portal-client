import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        cardDetails="Lorem Ipsum is simply dummy text of the pri"
        img={clock}
      />
      <InfoCard
        cardTitle="Visit our location"
        bgClass="bg-accent"
        cardDetails="Brooklyn, NY 10036, United States"
        img={marker}
      />
      <InfoCard
        cardTitle="Contact us now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        cardDetails="+000 123 456789"
        img={phone}
      />
    </div>
  );
};

export default info;
