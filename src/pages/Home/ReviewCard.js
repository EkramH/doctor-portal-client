import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          <h2 class="card-title">{review.name}</h2>
          <p className="text-sm">{review.address}</p>
          <p>{review.review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
