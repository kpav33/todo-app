import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import TodoItem from "./TodoItem";

const TodosContainer = styled.div`
  width: 100%;

  div:first-child {
    border-radius: 8px 8px 0 0;
  }
`;

function TodoList() {
  const {
    storedTodos,
    clickCompleted,
    clickActive,
    clickAll,
    handleOnDragEnd,
  } = useContext(Context);

  const todos = storedTodos.map((todo, index) => (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided) => (
        <TodoItem
          todo={todo}
          innerRef={provided.innerRef}
          provided={provided}
        />
      )}
    </Draggable>
  ));

  const todosActive = storedTodos
    .filter((todo) => todo.completed === false)
    .map((todo, index) => (
      <Draggable key={todo.id} draggableId={todo.id} index={index}>
        {(provided) => (
          <TodoItem
            todo={todo}
            innerRef={provided.innerRef}
            provided={provided}
          />
        )}
      </Draggable>
    ));

  const todosCompleted = storedTodos
    .filter((todo) => todo.completed === true)
    .map((todo, index) => (
      <Draggable key={todo.id} draggableId={todo.id} index={index}>
        {(provided) => (
          <TodoItem
            todo={todo}
            innerRef={provided.innerRef}
            provided={provided}
          />
        )}
      </Draggable>
    ));

  // Used react-beautiful-dnd to enable drag and drop functionality
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todosDivId">
        {(provided) => (
          <TodosContainer {...provided.droppableProps} ref={provided.innerRef}>
            {clickAll
              ? todos
              : clickActive
              ? todosActive
              : clickCompleted
              ? todosCompleted
              : todos.length > 0
              ? todos
              : null}
            {provided.placeholder}
          </TodosContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TodoList;
