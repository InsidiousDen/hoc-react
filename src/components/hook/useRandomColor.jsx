import React from "react";

const useRandomColor = () => {
  const colours = ["red", "green", "blue"];
  const randomColour = colours[Math.floor(Math.random() * 3)];
  const className = randomColour + "-text";

  return {
    className,
  };
};

export default useRandomColor;
