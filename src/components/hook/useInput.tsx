import { ChangeEvent, useState } from "react";

const useInput = () => {
  const [term, setTerm] = useState<string>("");

  return {
    term,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value),
  };
};
export default useInput;
