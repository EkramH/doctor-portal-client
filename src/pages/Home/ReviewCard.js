import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          <h2 className="card-title">{review.name}</h2>
          <p className="text-sm">{review.address}</p>
          <p>{review.review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
