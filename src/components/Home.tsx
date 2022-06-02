import React from "react";
import RenderList from "./RenderList";

const Home = () => {
  return (
    <div className="wrapper">
      <RenderList type="users" />
      <RenderList type="todos" />
      <RenderList type="posts" />
    </div>
  );
};

export default Home;
