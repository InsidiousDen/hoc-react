import React from "react";
import SetRandomColor from "./hoc/SetRandomColor";

const Contact = (props) => {
  return (
    <div>
      <div className="container">
        <h4>Contact</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repudiandae repellat illo magni eligendi cupiditate voluptates eius
          nam voluptate. Incidunt nihil ullam quae quia officia quaerat,
          deserunt eligendi explicabo totam?
        </p>
      </div>
    </div>
  );
};
export default SetRandomColor(Contact);
