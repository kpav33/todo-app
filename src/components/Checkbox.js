import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";

const CheckBoxContainer = styled.div`
  position: relative;

  label {
    background-color: ${({ theme }) => theme.labelBackgroundColor};
    border: 1px solid ${({ theme }) => theme.labelBorder};
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
    outline: 2px solid var(--bright-blue);
  }

  input:checked + label {
    background: var(--check-background);
    border-color: ${({ theme }) => theme.labelBorder};
  }

  input:checked + label::after {
    opacity: 1;
  }
`;

function Checkbox({ todo }) {
  const { handleChecked } = useContext(Context);

  return (
    <CheckBoxContainer>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.completed}
        onChange={() => handleChecked(todo.id)}
      />
      <label htmlFor={todo.id} />
    </CheckBoxContainer>
  );
}

export default Checkbox;
