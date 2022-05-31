// import React from "react";
// import FilterData from "./hoc/FilterData";

// const TodoList = ({ data }) => {
//   let renderTodos = data.map((todo) => {
//     return (
//       <div key={todo.id}>
//         <p>
//           <strong>{todo.title}</strong>
//         </p>
//       </div>
//     );
//   });
//   return (
//     <div>
//       <div>{renderTodos}</div>
//     </div>
//   );
// };

// const SearchTodos = FilterData(TodoList, "todos");

// export default SearchTodos;

//======================
//Using HOOK

import React from "react";
import useFD from "./hook/useFD";
import useInput from "./hook/useInput";

const TodoList = () => {
  const { term } = useInput();

  const { data, Wrapper } = useFD("todos", term);
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
    <Wrapper>
      <div>{renderTodos}</div>
    </Wrapper>
  );
};

export default TodoList;
