import React, { useEffect, useMemo, useState } from "react";

const useFD = (entity) => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  let filteredData = data.slice(0, 10).filter((d) => {
    if (entity === "users") {
      const { name } = d;
      return name.indexOf(term) >= 0;
    }
    if (entity === "todos") {
      const { title } = d;
      return title.indexOf(term) >= 0;
    }
  });

  let Wrapper = ({ children }) => {
    return (
      <div>
        <h2>{entity}</h2>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        {children}
      </div>
    );
  };

  return { data: filteredData, Wrapper };
};

export default useFD;
