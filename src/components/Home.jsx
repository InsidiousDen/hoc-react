import React from "react";
import RenderList from "./RenderList";
// import SearchUsers from "./UserList";
// import SearchTodos from "./TodoList";

const Home = () => {
  return (
    <div className="wrapper">
      {/* <SearchUsers />
      <SearchTodos /> */}
      <RenderList type="users" />
      <RenderList type="todos" />
      <RenderList type="posts" />
    </div>
  );
};

export default Home;
