import React from "react";
import useFilterData from "./hook/useFilterData";
import useInput from "./hook/useInput";

const RenderList = ({ type }) => {
  const { term, onChange } = useInput();
  const { data } = useFilterData(type, term);
  let renderList = data.map((item) => {
    return (
      <div key={item.id}>
        <p>
          <strong>{item.name || item.title}</strong>
        </p>
      </div>
    );
  });

  return (
    <div>
      <h2>{type}</h2>
      <input type="text" value={term} onChange={onChange}></input>
      <div>{renderList}</div>
    </div>
  );
};

export default RenderList;
