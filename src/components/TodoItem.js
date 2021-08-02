import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../Context";
import PropTypes from "prop-types";

import Checkbox from "./Checkbox";
import { VscClose } from "react-icons/vsc";

const TodoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.todoBackground};
  padding: 0.5rem 1rem;
  border-bottom: 1.5px solid ${({ theme }) => theme.inputBorderBottom};
  font-size: 16px;
  color: ${({ theme }) => theme.todoTextColor};

  svg {
    opacity: 1;
    cursor: pointer;
  }

  // Prevent pointer from targetting path (only allow on svg)
  path {
    pointer-events: none;
  }

  .closeButton {
    color: ${({ theme }) => theme.closeButton};
  }
`;

const TodoContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin-left: 1rem;
  }

  .styleCompleted {
    color: ${({ theme }) => theme.todoFinished};
    text-decoration: line-through;
    transition: all 0.5s linear;
  }

  .styleOver {
    transition: all 0.5s linear;
  }
`;

function TodoItem({ todo, innerRef, provided }) {
  const { handleDeleteClick } = useContext(Context);

  // Instead of tracking a seperate state for each TodoItem you could keep an object in state that has a key indicating if the object with that particular key as index is hovered or not
  // https://stackoverflow.com/questions/53194663/reactjs-render-single-icon-on-hover-for-list-item-rendered-from-array

  const [hover, setHover] = useState(false);

  // onMouseOver and onMouseOut event bubble, so the handler also triggers for children of the element. onMouseEnter and onMouseLeave don't bubble.
  // https://stackoverflow.com/questions/34071798/prevent-onmouseout-from-firing-on-child-elements

  return (
    <TodoContainer
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={innerRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <TodoContainerItem>
        <Checkbox todo={todo} />
        <p className={todo.completed ? "styleCompleted" : "styleOver"}>
          {todo.text}
        </p>
      </TodoContainerItem>
      {hover && (
        <VscClose
          size="26px"
          onClick={(event) => handleDeleteClick(event)}
          className="closeButton"
        />
      )}
    </TodoContainer>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  innerRef: PropTypes.func.isRequired,
  provided: PropTypes.object.isRequired,
};

export default TodoItem;
