import React, { useState, useContext } from "react";
import { Context } from "../Context";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  margin: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  color: var(--light-grayish-blue);
  background: var(--very-dark-desaturated-blue);
  border: none;
  border-radius: 5px;
  font-family: "Josefin Sans", sans-serif;
`;

let uniqueId = require("lodash.uniqueid");

function CreateTodo() {
  const { value, onChange, onSubmit, storedTodos } = useContext(Context);
  /*const [storedTodos, setStoredTodos] = useState([]);

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
  }*/

  //console.log(value);
  return (
    <StyledForm onSubmit={onSubmit}>
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
