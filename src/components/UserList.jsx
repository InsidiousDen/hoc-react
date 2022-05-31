// import React from "react";
// import FilterData from "./hoc/FilterData";

// const UsersList = ({ data }) => {
//   let renderUsers = data.map((user) => {
//     return (
//       <div key={user.id}>
//         <p>
//           <strong>{user.name}</strong>
//         </p>
//       </div>
//     );
//   });
//   return (
//     <div>
//       <div>{renderUsers}</div>
//     </div>
//   );
// };
// const SearchUsers = FilterData(UsersList, "users");

// export default SearchUsers;

//======================
//Using HOOK

import React from "react";
import useFilterData from "./hook/useFilterData";
import useInput from "./hook/useInput";

const UsersList = () => {
  const { term, onChange } = useInput();
  const { data } = useFilterData("users", term);

  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

  return (
    <div>
      <h2>{"users"}</h2>
      <input type="text" value={term} onChange={onChange}></input>
      <div>{renderUsers}</div>
    </div>
  );
};

export default UsersList;
