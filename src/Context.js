import React, { useState, useEffect } from "react";

const Context = React.createContext();

/*const startTodos = [
  { id: 1, text: "Complete online JavaScript course", completed: true },
  { id: 2, text: "Jog around the park 3x", completed: false },
  { id: 3, text: "10 minutes meditation", completed: false },
  { id: 4, text: "Read for 1 hour", completed: false },
];*/

function ContextProvider({ children }) {
  // Lodash unique id generator
  //let uniqueId = require("lodash.uniqueid");
  // Custom unique id generator (added to make sure id is unique everytime even after storing todos to localStorage)
  let uniqueId = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  // Store created todos as objects in an array
  const [storedTodos, setStoredTodos] = useState(
    JSON.parse(localStorage.getItem("savedTodos")) || []
  );
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
    const todoArray = storedTodos;
    setStoredTodosBackup(todoArray);
    setStoredTodos((prevState) =>
      prevState.filter((todo) => todo.completed === false)
    );
    console.log(todoArray);
  }

  // Handle deleting a single item from todo list
  function handleDeleteClick(event) {
    let targetId =
      event.target.parentNode.childNodes[0].children[0].childNodes[0].id;
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

  // Enable switching between all, active and completed todo items
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

  // Allow user to switch the order of todo items by dragging and droping them at the desired position
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    //const items = Array.from(storedTodos);
    const items = [...storedTodos];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setStoredTodos(items);
  }

  // Save created todos to localStorage
  useEffect(() => {
    localStorage.setItem("savedTodos", JSON.stringify(storedTodos));
  }, [storedTodos]);

  // Clear all saved todos from localStorage
  function clearLocalStorage() {
    let theme = localStorage.getItem("savedTheme");
    localStorage.clear();
    localStorage.setItem("savedTheme", theme);
    window.location.reload();
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
        handleOnDragEnd,
        clearLocalStorage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
