import React from "react";
import gifLoading from "../assets/gif/loading.gif";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <img src={gifLoading} alt="" />
    </div>
  );
};

export default Loading;
