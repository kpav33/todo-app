import React, { useState } from "react";

const Context = React.createContext();

/*const startTodos = [
  { id: 1, text: "Complete online JavaScript course", completed: true },
  { id: 2, text: "Jog around the park 3x", completed: false },
  { id: 3, text: "10 minutes meditation", completed: false },
  { id: 4, text: "Read for 1 hour", completed: false },
];*/

function ContextProvider({ children }) {
  // Lodash unique id generator
  let uniqueId = require("lodash.uniqueid");
  // Store created todos as objects in an array
  const [storedTodos, setStoredTodos] = useState([]);
  // StoredTodos backup
  const [storedTodosBackup, setStoredTodosBackup] = useState([]);
  // Only active todos
  // Track text value in the form input
  const [value, setValue] = useState("");

  // Create input into a controlled component
  function onChange(event) {
    setValue(event.target.value);
  }

  // Run on form input submit and store created todo as object into an array
  function onSubmit(event) {
    event.preventDefault();
    if (value === "") {
      return null;
    } else {
      /// console.log(value);
      let todo = {
        id: uniqueId(),
        text: value[0].toUpperCase() + value.slice(1),
        completed: false,
      };
      setStoredTodos((prevState) => [...prevState, todo]);
      setValue("");
    }
  }

  // Handle checking and unchecking a todo
  function handleChecked(id) {
    setStoredTodos((prevState) => {
      const updatedTodos = prevState.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return updatedTodos;
    });
  }

  // Store active todos
  function handleClickActive() {
    //const activeTodos = storedTodos.filter((todo) => todo.completed === false);
    const todoArray = storedTodos;
    setStoredTodosBackup(todoArray);
    setStoredTodos((prevState) =>
      prevState.filter((todo) => todo.completed === false)
    );
    console.log(todoArray);
  }

  //console.log(isHovering);

  // Handle deleting a single item from todo list
  function handleDeleteClick(event) {
    let targetId =
      event.target.parentNode.childNodes[0].children[0].childNodes[0].id;
    //console.log(targetId);
    setStoredTodos((prevState) => {
      const updatedTodos = prevState.filter((todo) => todo.id !== targetId);
      return updatedTodos;
    });
  }

  // Clear all completed todos
  function clearCompleted() {
    setStoredTodos((prevState) => {
      const updatedTodos = prevState.filter((todo) => todo.completed === false);
      return updatedTodos;
    });
  }

  const [clickAll, setClickAll] = useState(true);
  const [clickActive, setClickActive] = useState(false);
  const [clickCompleted, setClickCompleted] = useState(false);

  function handleClickAll() {
    setClickAll(true);
    setClickActive(false);
    setClickCompleted(false);
  }

  function handleClickActiveOne() {
    setClickAll(false);
    setClickActive(true);
    setClickCompleted(false);
  }

  function handleClickCompleted() {
    setClickAll(false);
    setClickActive(false);
    setClickCompleted(true);
  }

  return (
    <Context.Provider
      value={{
        value,
        onChange,
        onSubmit,
        storedTodos,
        setStoredTodos,
        handleChecked,
        handleDeleteClick,
        clearCompleted,
        handleClickActive,
        storedTodosBackup,
        clickAll,
        setClickAll,
        clickActive,
        setClickActive,
        clickCompleted,
        setClickCompleted,
        handleClickAll,
        handleClickActiveOne,
        handleClickCompleted,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
