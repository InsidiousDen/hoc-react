import { useEffect, useState } from "react";
import { DataType } from "../../types/types";

const useFilterData = (entity: string, term: string) => {
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  let filteredData = data.slice(0, 10).filter((d: DataType) => {
    if (entity === "users") {
      const { name } = d;
      return name.indexOf(term) >= 0;
    } else {
      const { title } = d;
      return title.indexOf(term) >= 0;
    }
  });

  return { data: filteredData };
};

export default useFilterData;
