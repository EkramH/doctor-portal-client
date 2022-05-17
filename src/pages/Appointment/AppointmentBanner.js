import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import chairBg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div
      style={{
        backgroundImage: `url(${chairBg})`,
        minHeight: "94vh",
      }}
      class="hero min-h-screen"
    >
      <div class="w-full hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt=""
          class="lg:max-w-lg md:max-w-md w-full rounded-lg shadow-2xl"
        />
        <div className="mx-auto bg-white shadow-lg p-3 rounded-lg">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p className="font-bold">You have selected: {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;