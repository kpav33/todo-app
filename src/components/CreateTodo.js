import React, { useContext } from "react";
import { Context } from "../Context";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  margin: 1rem;
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1.3rem;
  color: ${({ theme }) => theme.todoTextColor};
  background: ${({ theme }) => theme.backgroundInput};
  border: none;
  border-radius: 5px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  caret-color: var(--bright-blue);
`;
// Part of design, but I don't like how it looks
/*const Dot = styled.div`
  height: 25px;
  width: 25px;
  background-color: inherit;
  border: 1px solid var(--darker-grayish-blue);
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 16px;
  left: 15px;
`;*/

function CreateTodo() {
  const { value, onChange, onSubmit } = useContext(Context);

  return (
    <StyledForm onSubmit={onSubmit}>
      {/*// Dot part of design, but I don't like how it looks
       */}
      {/*<Dot />*/}
      <StyledInput
        type="text"
        name="todoInput"
        placeholder="Create a new todo..."
        value={value}
        onChange={onChange}
      />
    </StyledForm>
  );
}

export default CreateTodo;
