import React, { useState } from "react";

import { createContext } from "react";

export const productContext = createContext();

const Context = ({ children }) => {
  const [number, setNumber] = React.useState([]);
  const [minutes, setMinutes] = React.useState(0);
  const [toggle, setToggle] = React.useState(0);
  const [word, setWord] = useState("");
  return (
    <productContext.Provider
      value={{
        number,
        setNumber,
        minutes,
        setMinutes,
        toggle,
        setToggle,
        word,
        setWord,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
export default Context;
