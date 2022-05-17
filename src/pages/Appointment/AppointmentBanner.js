import React from "react";
import chair from "../../assets/images/chair.png";
import chairBg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${chairBg})`,
        minHeight: "94vh",
      }}
      className="hero min-h-screen"
    >
      <div className="w-full hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt=""
          className="lg:max-w-lg md:max-w-md w-full rounded-lg shadow-2xl"
        />
        <div className="mx-auto bg-white shadow-lg p-3 rounded-lg ">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
