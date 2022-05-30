import React from "react";
import FilterData from "./hoc/FilterData";

const TodoList = ({ data }) => {
  let renderTodos = data.map((todo) => {
    return (
      <div key={todo.id}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchTodos = FilterData(TodoList, "todos");

export default SearchTodos;
