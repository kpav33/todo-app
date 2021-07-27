import React, { useContext } from "react";
import { Context } from "../Context";

function TodoList() {
  const { storedTodos } = useContext(Context);

  const todos = storedTodos.map((todo) => {
    return (
      <li id={todo.id} key={todo.id}>
        {todo.text}
      </li>
    );
  });

  console.log(storedTodos);

  return <div>{storedTodos.length > 0 && todos}</div>;
}

export default TodoList;
