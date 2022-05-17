import React from "react";

const InfoCard = ({ img, cardTitle, cardDetails, bgClass }) => {
  return (
    <div>
      <div
        className={`card my-10 lg:card-side shadow-xl text-white ${bgClass}`}
      >
        <figure className="p-5">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
