import React from "react";
import chair from "../../assets/images/chair.png";
import chairBg from "../../assets/images/bg.png";
import MainButton from "../../shared/MainButton";

const Banner = () => {
  return (
    <div>
      <div
        className="hero bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${chairBg})`,
          minHeight: "94vh",
        }}
      >
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={chair}
              alt=""
              className="lg:max-w-lg md:max-w-md w-full rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <MainButton>Get Start</MainButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
