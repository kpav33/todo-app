import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  // Stuff here
  let uniqueId = require("lodash.uniqueid");
  const [storedTodos, setStoredTodos] = useState([]);

  const [value, setValue] = useState("");

  function onChange(event) {
    setValue(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log("SUBMITTED " + value);
    let todo = {
      id: uniqueId(),
      text: value,
      completed: false,
    };
    setStoredTodos((prevArray) => [...prevArray, todo]);
    setValue("");
  }

  return (
    <Context.Provider value={{ value, onChange, onSubmit, storedTodos }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
