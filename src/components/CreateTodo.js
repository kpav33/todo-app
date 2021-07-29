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
  color: var(--light-grayish-blue);
  background: var(--very-dark-desaturated-blue);
  border: none;
  border-radius: 5px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  caret-color: var(--bright-blue);
  padding-left: 3.5rem;
`;
// Maybe remove looks a bit weird??
const Dot = styled.div`
  height: 25px;
  width: 25px;
  background-color: inherit;
  border: 1px solid var(--darker-grayish-blue);
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 16px;
  left: 15px;
`;

function CreateTodo() {
  const { value, onChange, onSubmit } = useContext(Context);
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
      {/* Dot added temporarly, part of the design, but I don't like how it looks */}
      <Dot />
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
