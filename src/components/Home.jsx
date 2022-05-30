import React from "react";
import SearchUsers from "./UserList";
import SearchTodos from "./TodoList";

const Home = () => {
  return (
    <div className="wrapper">
      <SearchUsers />
      <SearchTodos />
    </div>
  );
};

export default Home;
