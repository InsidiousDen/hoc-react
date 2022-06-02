import React, { FC } from "react";
import { DataType } from "../types/types";
import useFilterData from "./hook/useFilterData";
import useInput from "./hook/useInput";

interface RenderListProps {
  type: string;
}

const RenderList: FC<RenderListProps> = ({ type }) => {
  const { term, onChange } = useInput();
  const { data } = useFilterData(type, term);
  let renderList = data.map((item: DataType) => {
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
