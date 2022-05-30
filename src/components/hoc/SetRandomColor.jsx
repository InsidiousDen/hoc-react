import React from "react";

const SetRandomColorHOC = (WrappedComponent) => {
  const colours = ["red", "green", "blue"];
  const randomColour = colours[Math.floor(Math.random() * 3)];
  const className = randomColour + "-text";

  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default SetRandomColorHOC;
