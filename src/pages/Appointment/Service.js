import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-md px-5">
      <div className="card-body">
        <h2 className="card-title text-secondary text-xl">{name}</h2>
        <p>
          {slots.length > 0 ? <span>{slots[0]}</span> : <span>No slots</span>}
        </p>
        <p>
          {slots.length} {slots.length ? "Spaces" : "Space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
