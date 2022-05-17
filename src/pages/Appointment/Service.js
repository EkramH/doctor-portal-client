import React from "react";
import MainButton from "../../shared/MainButton";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-md px-5">
      <div class="card-body">
        <h2 class="card-title text-secondary text-xl">{name}</h2>
        <p>
          {slots.length > 0 ? <span>{slots[0]}</span> : <span>No slots</span>}
        </p>
        <p>
          {slots.length} {slots.length ? "Spaces" : "Space"} available
        </p>
        <div class="card-actions justify-center">
          <MainButton>Book Appointment</MainButton>
        </div>
      </div>
    </div>
  );
};

export default Service;
