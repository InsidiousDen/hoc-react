import React, { useEffect, useState } from "react";

const useFilterData = (entity, term) => {
  const [data, setData] = useState([]);

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

  return { data: filteredData };
};

export default useFilterData;
