import React, { useState } from "react";

const useInput = () => {
  const [term, setTerm] = useState("");

  return {
    term,
    onChange: (e) => setTerm(e.target.value),
  };
};
export default useInput;
