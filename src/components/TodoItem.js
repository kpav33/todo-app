import React, { useContext, useState } from "react";
import styled from "styled-components";

import { Context } from "../Context";
import { VscClose } from "react-icons/vsc";

const TodoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--very-dark-desaturated-blue);
  padding: 0.5rem 1rem;
  border-bottom: 1.5px solid var(--darker-grayish-blue);
  font-size: 16px;
  color: var(--light-grayish-blue);

  svg {
    opacity: 1;
    cursor: pointer;
  }

  // Prevent pointer from targetting path (only allow on svg)
  path {
    pointer-events: none;
  }
`;

const TodoContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin-left: 1rem;
  }
`;

const CheckBoxContainer = styled.div`
  position: relative;

  label {
    background-color: var(--very-dark-desaturated-blue);
    border: 1px solid var(--darker-grayish-blue);
    border-radius: 50%;
    cursor: pointer;
    height: 25px;
    left: 0;
    position: absolute;
    top: -4px;
    width: 25px;

    &:hover {
      outline: 1px solid var(--bright-blue);
    }
  }

  // Modify border width to make checkbox bolder or thinner
  label::after {
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 6px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }

  // Cant focus if set to visibility: hidden
  input {
    opacity: 0;
  }

  input:focus + label {
    outline: 5px solid var(--bright-blue);
  }

  input:checked + label {
    background: var(--check-background);
    border-color: var(--darker-grayish-blue);
  }

  input:checked + label::after {
    opacity: 1;
  }
`;

function TodoItem({ todo }) {
  const { handleChecked, handleDeleteClick } = useContext(Context);
  const styleCompleted = {
    color: "var(--darker-grayish-blue)",
    textDecoration: "line-through",
  };

  // Instead of tracking a seperate state for each TodoItem you could keep an object in state that has a key indicating if the object with that particular key as index is hovered or not
  // https://stackoverflow.com/questions/53194663/reactjs-render-single-icon-on-hover-for-list-item-rendered-from-array

  const [hover, setHover] = useState(false);

  // onMouseOver and onMouseOut event bubble, so the handler also triggers for children of the element. onMouseEnter and onMouseLeave don't bubble.
  // https://stackoverflow.com/questions/34071798/prevent-onmouseout-from-firing-on-child-elements

  return (
    <TodoContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <TodoContainerItem>
        <CheckBoxContainer>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.completed}
            onChange={() => handleChecked(todo.id)}
          />
          <label htmlFor={todo.id} />
        </CheckBoxContainer>
        <p style={todo.completed ? styleCompleted : null}>{todo.text}</p>
      </TodoContainerItem>
      {hover && (
        <VscClose
          size="26px"
          color="var(--darker-grayish-blue)"
          onClick={(event) => handleDeleteClick(event)}
          className="closeButton"
        />
      )}
    </TodoContainer>
  );
}

export default TodoItem;
