import React from "react";

const MainButton = ({ children }) => {
  return (
    <button className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold">
      {children}
    </button>
  );
};

export default MainButton;
