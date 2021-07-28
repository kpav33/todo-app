import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";

import TodoItem from "./TodoItem";

const TodosContainer = styled.div`
  width: 100%;

  div:first-child {
    border-radius: 8px 8px 0 0;
  }
`;

function TodoList() {
  const { storedTodos, clickCompleted, clickActive, clickAll } =
    useContext(Context);

  const todos = storedTodos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));

  const todosActive = storedTodos
    .filter((todo) => todo.completed === false)
    .map((todo) => <TodoItem key={todo.id} todo={todo} />);

  const todosCompleted = storedTodos
    .filter((todo) => todo.completed === true)
    .map((todo) => <TodoItem key={todo.id} todo={todo} />);

  //console.log(storedTodos);

  //return <>{storedTodos.length > 0 && todos}</>;
  return (
    <TodosContainer>
      {clickAll
        ? todos
        : clickActive
        ? todosActive
        : clickCompleted
        ? todosCompleted
        : todos.length > 0
        ? todos
        : null}
    </TodosContainer>
  );
}

export default TodoList;
